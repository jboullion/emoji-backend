import { UpdateUserDto } from './dto/user-update-dto';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    getUserById(uuid: string): Promise<User>;
    getUserByEmail(email: string): Promise<User>;
    updateUser(user: User, updateUserDto: UpdateUserDto): Promise<User>;
    updateAvatar(emoji: string, user: User): Promise<string>;
    updateTickets(tickets: number, user: User): Promise<number>;
}
