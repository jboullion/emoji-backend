import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { BuyItemDto } from './dto/buy-item.dto';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './entities/item.entity';
import { ItemsRepository } from './items.repository';
import { ShopRepository } from './shop.repository';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemsRepository) private itemsRepository: ItemsRepository,
    @InjectRepository(ShopRepository) private shopRepository: ShopRepository,
  ) {}

  async buy(buyItemDto: BuyItemDto, user: User) {
    this.shopRepository.buy(buyItemDto, user);
    return await this.shopRepository.buy(buyItemDto, user);
  }

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
