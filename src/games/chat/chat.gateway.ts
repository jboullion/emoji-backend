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
import { ChatMessageDTO, JoinRoomDTO, RoomPayload } from './dto/chat-dtos';

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
    @MessageBody() data: JoinRoomDTO,
    @ConnectedSocket() client: Socket,
  ): void {
    if (data.leave) {
      try {
        client.leave(data.leave);

        const leaveMessage: RoomPayload = {
          username: data.avatar,
          userID: client.id,
        };

        this.server.to(data.leave).emit('roomLeave', leaveMessage);
      } catch (e) {
        this.logger.error(`Chat Leave Room: ${data.leave}`, e.stack);
        //client.emit('error', 'couldnt perform requested action');
      }
    }

    if (data.join) {
      try {
        client.join(data.join);

        const joinMessage: RoomPayload = {
          username: data.avatar,
          userID: client.id,
        };

        this.server.to(data.join).emit('roomJoin', joinMessage);
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
    // TODO: Somehow inform the room this user left. Unreliable on the client side
    //console.log(client.rooms);
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }
}
