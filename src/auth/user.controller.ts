import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Query,
  UseGuards,
} from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
@UseGuards(AuthGuard())
export class UserController {
  private logger = new Logger('UserController', { timestamp: true });

  constructor(private userService: UserService) {}

  // @Get('/:uuid')
  // async getUserByUUID(@Param('uuid') uuid: string): Promise<User> {
  //   this.logger.verbose(`Searching for user by ${uuid}`);
  //   return await this.userService.getUserById(uuid);
  // }

  @Get('/search')
  async getUserByEmail(@Query() query: { email: string }): Promise<User> {
    return await this.userService.getUserByEmail(query.email);
  }

  @Patch('/avatar')
  updateAvatar(
    @Body() body: { emoji: string },
    @GetUser() user: User,
  ): Promise<string> {
    return this.userService.updateAvatar(body.emoji, user);
  }
}
