import { UpdateUserDto } from './dto/user-update-dto';
import { User } from './user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    private logger;
    constructor(userService: UserService);
    getUser(user: User): Promise<User>;
    getUserByEmail(query: {
        email: string;
    }): Promise<User>;
    updateUser(updateUserDto: UpdateUserDto, user: User): Promise<User>;
    updateAvatar(dto: {
        emoji: string;
    }, user: User): Promise<string>;
    updateTickets(dto: {
        tickets: number;
    }, user: User): Promise<number>;
}
