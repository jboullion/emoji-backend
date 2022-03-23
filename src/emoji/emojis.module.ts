import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { EmojisController } from './emojis.controller';
import { EmojisRepository } from './emojis.repository';
import { EmojisService } from './emojis.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmojisRepository]), AuthModule],
  controllers: [EmojisController],
  providers: [EmojisService],
})
export class EmojisModule {}
