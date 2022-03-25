import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from './auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository]), AuthModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
