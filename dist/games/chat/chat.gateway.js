"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
const socket_io_1 = require("socket.io");
let ChatGateway = class ChatGateway {
    constructor() {
        this.logger = new common_1.Logger('ChatGateway');
        this.roomUsers = [];
    }
    handleMessage(data, client) {
        this.server.to(data.roomID).emit('broadcastMessage', data);
    }
    changeRoom(data, client) {
        if (data.leave) {
            try {
                client.leave(data.leave);
                const leaveUser = {
                    username: data.avatar,
                    clientID: client.id,
                    roomID: data.leave,
                };
                this.server.to(data.leave).emit('roomLeave', leaveUser);
                this.removeUserFromRoom(client.id);
            }
            catch (e) {
                this.logger.error(`Chat Leave Room: ${data.leave}`, e.stack);
            }
        }
        if (data.join) {
            try {
                client.join(data.join);
                const joinUser = {
                    username: data.avatar,
                    clientID: client.id,
                    roomID: data.join,
                };
                this.addUserToRoom(joinUser);
                const roomUsers = this.roomUsers.filter((user) => user.roomID === data.join);
                this.server.to(data.join).emit('roomJoin', {
                    user: joinUser,
                    roomUsers: roomUsers,
                });
            }
            catch (e) {
                this.logger.error(`Chat Join Room: ${data.join}`, e.stack);
            }
        }
    }
    afterInit(server) {
        this.logger.log('Init');
    }
    handleDisconnect(client) {
        const user = this.removeUserFromRoom(client.id);
        if (user) {
            this.server.to(user.roomID).emit('roomLeave', user);
        }
        this.logger.log(`Client disconnected: ${client.id}`);
    }
    handleConnection(client, ...args) {
        this.logger.log(`Client connected: ${client.id}`);
    }
    removeUserFromRoom(removeID) {
        let roomUser = null;
        const userIndex = this.roomUsers.findIndex((user) => user.clientID === removeID);
        if (userIndex > 0) {
            roomUser = this.roomUsers[userIndex];
            this.roomUsers.splice(userIndex);
        }
        return roomUser;
    }
    addUserToRoom(addUser) {
        const currentUser = this.roomUsers.find((user) => user.clientID === addUser.clientID && user.roomID === addUser.roomID);
        if (!currentUser) {
            this.roomUsers.push(addUser);
        }
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('sendMessage'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "handleMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('changeRoom'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], ChatGateway.prototype, "changeRoom", null);
ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        cors: {
            origin: '*',
        },
    })
], ChatGateway);
exports.ChatGateway = ChatGateway;
//# sourceMappingURL=chat.gateway.js.map