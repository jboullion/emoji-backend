import { InternalServerErrorException, Logger } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';

import { BuyItemDto } from './dto/buy-item.dto';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './entities/item.entity';
import { UserItems } from './entities/user-item.entity';

@EntityRepository(Item)
export class ItemsRepository extends Repository<Item> {
  private logger = new Logger('ItemsRepository', { timestamp: true });

  async createItem(createItemDto: CreateItemDto): Promise<Item> {
    const { emoji, name, description, tickets } = createItemDto;

    const item = this.create({
      emoji,
      name,
      description,
      tickets,
    });

    await this.save(item);

    return item;
  }

  async getItems(): Promise<Item[]> {
    const query = this.createQueryBuilder('item');

    try {
      const items = await query.getMany();
      return items;
    } catch (error) {
      this.logger.error(`getItems failed`, error.stack);
      throw new InternalServerErrorException();
    }
  }
}
