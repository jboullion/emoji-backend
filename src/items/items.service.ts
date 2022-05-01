import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './entities/item.entity';
import { ItemsRepository } from './items.repository';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemsRepository) private itemsRepository: ItemsRepository,
  ) {}

  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemsRepository.createItem(createItemDto);
  }

  async findAll() {
    return await this.itemsRepository.getItems();
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  // remove(id: number) {
  //   return `This action removes a #${id} item`;
  // }
}
