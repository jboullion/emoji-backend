import { Repository } from 'typeorm';
import { AuthCreateDto } from './dto/auth-create.dto';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/user-update-dto';
export declare class UsersRepository extends Repository<User> {
    private logger;
    createUser(authCredentialsDto: AuthCreateDto): Promise<User>;
    updateUser(user: User, updateUserDto: UpdateUserDto): Promise<User>;
    updateAvatar(emoji: string, user: User): Promise<string>;
    updateTickets(tickets: number, user: User): Promise<number>;
}
