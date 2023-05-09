import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { ChatMessageDTO, ChangeRoomDTO } from './dto/chat-dtos';
export declare class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    server: Server;
    private logger;
    private roomUsers;
    handleMessage(data: ChatMessageDTO, client: Socket): void;
    changeRoom(data: ChangeRoomDTO, client: Socket): void;
    afterInit(server: Server): void;
    handleDisconnect(client: Socket): void;
    handleConnection(client: Socket, ...args: any[]): void;
    private removeUserFromRoom;
    private addUserToRoom;
}
