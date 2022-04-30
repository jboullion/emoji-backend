import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/user-update-dto';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
//import Hashids from 'hashids';

@Injectable()
export class UserService {
  //private hashids = new Hashids('UnguessableSalt4evr');

  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
  ) {}

  async getUserById(uuid: string): Promise<User> {
    // Instead of a uuid, we may instead want a hashedID.
    // https://github.com/niieani/hashids.js
    //const userID = hashids.decode(publicid); //
    const user = await this.usersRepository.findOne({
      uuid: uuid,
      //id: userID
    });

    if (!user) {
      throw new NotFoundException(`User ${uuid} not found`);
    }

    // Instead of a uuid, we may instead want a hashedID.
    // https://github.com/niieani/hashids.js
    // const hashedID = this.hashids.encode(user.id);
    // user.id = hashedID

    return user;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      email: email,
    });

    if (!user) {
      throw new NotFoundException(`${email} not found`);
    }

    return user;
  }

  async updateUser(user: User, updateUserDto: UpdateUserDto): Promise<User> {
    if (user && (await bcrypt.compare(updateUserDto.password, user.password))) {
      return await this.usersRepository.updateUser(user, updateUserDto);
    }

    throw new UnauthorizedException('Please check credentials');
  }

  async updateAvatar(emoji: string, user: User): Promise<string> {
    return await this.usersRepository.updateAvatar(emoji, user);
  }

  async updateTickets(tickets: number, user: User): Promise<number> {
    return await this, this.usersRepository.updateTickets(tickets, user);
  }
}
