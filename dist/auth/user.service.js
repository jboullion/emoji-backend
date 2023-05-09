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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_repository_1 = require("./users.repository");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async getUserById(uuid) {
        const user = await this.usersRepository.findOne({
            uuid: uuid,
        });
        if (!user) {
            throw new common_1.NotFoundException(`User ${uuid} not found`);
        }
        return user;
    }
    async getUserByEmail(email) {
        const user = await this.usersRepository.findOne({
            email: email,
        });
        if (!user) {
            throw new common_1.NotFoundException(`${email} not found`);
        }
        return user;
    }
    async updateUser(user, updateUserDto) {
        if (user && (await bcrypt.compare(updateUserDto.password, user.password))) {
            return await this.usersRepository.updateUser(user, updateUserDto);
        }
        throw new common_1.UnauthorizedException('Please check credentials');
    }
    async updateAvatar(emoji, user) {
        return await this.usersRepository.updateAvatar(emoji, user);
    }
    async updateTickets(tickets, user) {
        return await this, this.usersRepository.updateTickets(tickets, user);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_repository_1.UsersRepository)),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map