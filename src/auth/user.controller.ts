import {
  BadRequestException,
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
import { UpdateUserDto } from './dto/user-update-dto';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
@UseGuards(AuthGuard())
export class UserController {
  private logger = new Logger('UserController', { timestamp: true });

  constructor(private userService: UserService) {}

  @Get()
  async getUser(@GetUser() user: User): Promise<User> {
    return user;
  }

  @Get('/search')
  async getUserByEmail(@Query() query: { email: string }): Promise<User> {
    return await this.userService.getUserByEmail(query.email);
  }

  @Patch('/update')
  async updateUser(
    //@Param() params: { uuid: string },
    @Body() updateUserDto: UpdateUserDto,
    @GetUser() user: User,
  ): Promise<User> {
    // this.logger.verbose(
    //   `Update User: ${params.uuid} ${JSON.stringify(params.uuid)}`,
    // );

    return await this.userService.updateUser(user, updateUserDto);
    //return await this.userService.updateUser(params.uuid, updateUserDto);
  }

  @Patch('/avatar')
  updateAvatar(
    @Body() dto: { emoji: string },
    @GetUser() user: User,
  ): Promise<string> {
    return this.userService.updateAvatar(dto.emoji, user);
  }

  @Patch('/tickets')
  updateTickets(
    @Body() dto: { tickets: number },
    @GetUser() user: User,
  ): Promise<number> {
    // TODO: Prevent users sending fake API requests to increase their ticket count...somehow.
    if (isNaN(dto.tickets) || dto.tickets > 100) {
      throw new BadRequestException('Ticket value must be a number');
    }

    return this.userService.updateTickets(Number(dto.tickets), user);
  }
}
