import {
  ConflictException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { DeleteResult, EntityRepository, Repository } from 'typeorm';
import { AuthCreateDto } from './dto/auth-create.dto';
import { UserStatus } from './user-status.enum';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';
import { title } from 'process';
import { zip } from 'rxjs';
import { UpdateUserDto } from './dto/user-update-dto';
//import Hashids from 'hashids';

enum UserRepoErrorCodes {
  EMAIL_EXISTS = '23505',
}

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  private logger = new Logger('UsersRepository', { timestamp: true });

  async createUser(authCredentialsDto: AuthCreateDto): Promise<User> {
    //const hashids = new Hashids();

    const { username, email, password } = authCredentialsDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Instead of a uuid, we may instead want a hashedID.
    // https://github.com/niieani/hashids.js
    const uuid = randomUUID();

    const user = this.create({
      uuid,
      username,
      email,
      password: hashedPassword,
      status: UserStatus.UNACTIVATED,
    });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === UserRepoErrorCodes.EMAIL_EXISTS) {
        throw new ConflictException('Email already in use');
      } else {
        this.logger.error(
          `createUser failed for email ${email}. Credentials: ${JSON.stringify({
            authCredentialsDto,
          })}`,
          error.stack,
        );
        throw new InternalServerErrorException();
      }
    }

    return user;
  }

  async updateUser(user: User, updateUserDto: UpdateUserDto): Promise<User> {
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
    } catch (error) {
      if (error.code === UserRepoErrorCodes.EMAIL_EXISTS) {
        throw new ConflictException('Email already in use');
      } else {
        this.logger.error(
          `updateUser failed for user ${
            user.email
          }. Credentials: ${JSON.stringify({
            updateUserDto,
          })}`,
          error.stack,
        );
        throw new InternalServerErrorException();
      }
    }

    return user;
  }

  async updateAvatar(emoji: string, user: User): Promise<string> {
    user.avatar = emoji;

    try {
      await this.save(user);
    } catch (error) {
      // if (error.code === UserRepoErrorCodes.EMAIL_EXISTS) {
      //   throw new ConflictException('Email already in use');
      // } else {
      this.logger.error(
        `updateAvatar failed for user ${
          user.email
        }. Credentials: ${JSON.stringify({
          emoji,
        })}`,
        error.stack,
      );
      throw new InternalServerErrorException();
      //}
    }

    return user.avatar;
  }

  async updateTickets(tickets: number, user: User) {
    user.tickets += tickets;

    // Setting a hard cap on the number tickets a user can have at a time, for now.
    if (user.tickets > 9999) {
      user.tickets = 9999;
    }

    try {
      await this.save(user);
    } catch (error) {
      // if (error.code === UserRepoErrorCodes.EMAIL_EXISTS) {
      //   throw new ConflictException('Email already in use');
      // } else {
      this.logger.error(
        `updateTickets failed for user ${
          user.email
        }. Credentials: ${JSON.stringify({
          tickets,
        })}`,
        error.stack,
      );
      throw new InternalServerErrorException();
      //}
    }

    return user.tickets;
  }

  // ! NOTE: leaving here as an example of how to talk with other repositories
  //   async getEmojis(filterDto: GetEmojisFilterDto): Promise<Emoji[]> {
  //     const { search, status } = filterDto;
  //     const query = this.createQueryBuilder('emoji');
  //     if (status) {
  //       query.andWhere('emoji.status = :status', { status });
  //     }
  //     if (search) {
  //       // NOTE: For case insensative queries you can use ILIKE
  //       // NOTE: For improved performance creating an index on idx_title = LOWER(title)  can be helpful
  //       query.andWhere(
  //         'LOWER(emoji.title) LIKE :search OR LOWER(emoji.description) LIKE :search',
  //         { search: `%${search.toLowerCase()}%` },
  //       );
  //     }
  //     const emojis = await query.getMany();
  //     return emojis;
  //   }
  //   async createEmoji(createEmojiDto: CreateEmojiDto): Promise<Emoji> {
  //     const { title, description } = createEmojiDto;
  //     const emoji = this.create({
  //       title,
  //       description,
  //       status: EmojiStatus.OPEN,
  //     });
  //     await this.save(emoji);
  //     return emoji;
  //   }
  //   async deleteEmoji(id: string): Promise<DeleteResult> {
  //     return await this.delete(id);
  //   }
}
