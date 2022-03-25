import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
  ) {}

  async getUserById(uuid: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      uuid: uuid,
    });

    if (!user) {
      throw new NotFoundException(`User ${uuid} not found`);
    }

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

  async updateAvatar(emoji: string, user: User): Promise<string> {
    return await this.usersRepository.updateAvatar(emoji, user);
  }
}
