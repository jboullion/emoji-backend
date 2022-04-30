import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemsRepository } from './items.repository';
import { ShopRepository } from './shop.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemsRepository]),
    TypeOrmModule.forFeature([ShopRepository]),
  ],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
