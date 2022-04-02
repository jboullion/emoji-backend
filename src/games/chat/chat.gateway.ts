import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';
import { ChatMessageDTO, ChangeRoomDTO, RoomUser } from './dto/chat-dtos';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('ChatGateway');

  // TODO: This is NOT a good way to manage rooms. At the very least update this to a DB table.
  private roomUsers: RoomUser[] = [];

  @SubscribeMessage('sendMessage')
  handleMessage(
    @MessageBody() data: ChatMessageDTO,
    @ConnectedSocket() client: Socket,
  ): void {
    //this.logger.log(`Broadcast Room: ${data.roomID}`);
    this.server.to(data.roomID).emit('broadcastMessage', data);
  }

  @SubscribeMessage('changeRoom')
  changeRoom(
    @MessageBody() data: ChangeRoomDTO,
    @ConnectedSocket() client: Socket,
  ): void {
    if (data.leave) {
      try {
        client.leave(data.leave);

        const leaveUser: RoomUser = {
          username: data.avatar,
          clientID: client.id,
          roomID: data.leave,
        };

        this.server.to(data.leave).emit('roomLeave', leaveUser);

        this.removeUserFromRoom(client.id);
      } catch (e) {
        this.logger.error(`Chat Leave Room: ${data.leave}`, e.stack);
        //client.emit('error', 'couldnt perform requested action');
      }
    }

    if (data.join) {
      try {
        client.join(data.join);

        const joinUser: RoomUser = {
          username: data.avatar,
          clientID: client.id,
          roomID: data.join,
        };

        this.addUserToRoom(joinUser);

        const roomUsers = this.roomUsers.filter(
          (user) => user.roomID === data.join,
        );
        this.server.to(data.join).emit('roomJoin', {
          user: joinUser,
          roomUsers: roomUsers,
        });
      } catch (e) {
        this.logger.error(`Chat Join Room: ${data.join}`, e.stack);
        //client.emit('error', 'couldnt perform requested action');
      }
    }
  }

  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleDisconnect(client: Socket) {
    //
    const user: RoomUser = this.removeUserFromRoom(client.id);

    if (user) {
      this.server.to(user.roomID).emit('roomLeave', user);
    }

    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  private removeUserFromRoom(removeID: string): RoomUser {
    let roomUser = null;

    const userIndex: number = this.roomUsers.findIndex(
      (user) => user.clientID === removeID,
    );

    if (userIndex > 0) {
      roomUser = this.roomUsers[userIndex];
      this.roomUsers.splice(userIndex);
    }

    return roomUser;
  }

  private addUserToRoom(addUser: RoomUser) {
    const currentUser: RoomUser = this.roomUsers.find(
      (user) =>
        user.clientID === addUser.clientID && user.roomID === addUser.roomID,
    );

    if (!currentUser) {
      this.roomUsers.push(addUser);
    }
  }
}
