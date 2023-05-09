"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_status_enum_1 = require("./user-status.enum");
const user_entity_1 = require("./user.entity");
const bcrypt = require("bcrypt");
const crypto_1 = require("crypto");
var UserRepoErrorCodes;
(function (UserRepoErrorCodes) {
    UserRepoErrorCodes["EMAIL_EXISTS"] = "23505";
})(UserRepoErrorCodes || (UserRepoErrorCodes = {}));
let UsersRepository = class UsersRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger('UsersRepository', { timestamp: true });
    }
    async createUser(authCredentialsDto) {
        const { username, email, password } = authCredentialsDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const uuid = (0, crypto_1.randomUUID)();
        const user = this.create({
            uuid,
            username,
            email,
            password: hashedPassword,
            status: user_status_enum_1.UserStatus.UNACTIVATED,
        });
        try {
            await this.save(user);
        }
        catch (error) {
            if (error.code === UserRepoErrorCodes.EMAIL_EXISTS) {
                throw new common_1.ConflictException('Email already in use');
            }
            else {
                this.logger.error(`createUser failed for email ${email}. Credentials: ${JSON.stringify({
                    authCredentialsDto,
                })}`, error.stack);
                throw new common_1.InternalServerErrorException();
            }
        }
        return user;
    }
    async updateUser(user, updateUserDto) {
        const { username, email, passwordNew } = updateUserDto;
        if (username) {
            user.username = username;
        }
        if (email) {
            user.email = email;
        }
        if (passwordNew) {
            const salt = await bcrypt.genSalt();
            user.password = await bcrypt.hash(passwordNew, salt);
        }
        try {
            await this.save(user);
        }
        catch (error) {
            if (error.code === UserRepoErrorCodes.EMAIL_EXISTS) {
                throw new common_1.ConflictException('Email already in use');
            }
            else {
                this.logger.error(`updateUser failed for user ${user.email}. Credentials: ${JSON.stringify({
                    updateUserDto,
                })}`, error.stack);
                throw new common_1.InternalServerErrorException();
            }
        }
        return user;
    }
    async updateAvatar(emoji, user) {
        user.avatar = emoji;
        try {
            await this.save(user);
        }
        catch (error) {
            this.logger.error(`updateAvatar failed for user ${user.email}. Credentials: ${JSON.stringify({
                emoji,
            })}`, error.stack);
            throw new common_1.InternalServerErrorException();
        }
        return user.avatar;
    }
    async updateTickets(tickets, user) {
        user.tickets += tickets;
        if (user.tickets > 9999) {
            user.tickets = 9999;
        }
        try {
            await this.save(user);
        }
        catch (error) {
            this.logger.error(`updateTickets failed for user ${user.email}. Credentials: ${JSON.stringify({
                tickets,
            })}`, error.stack);
            throw new common_1.InternalServerErrorException();
        }
        return user.tickets;
    }
};
UsersRepository = __decorate([
    (0, typeorm_1.EntityRepository)(user_entity_1.User)
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map