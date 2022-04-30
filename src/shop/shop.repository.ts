import { InternalServerErrorException, Logger } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';

import { BuyItemDto } from './dto/buy-item.dto';
import { UserItems } from './entities/user-item.entity';

@EntityRepository(UserItems)
export class ShopRepository extends Repository<UserItems> {
  private logger = new Logger('ShopRepository', { timestamp: true });

  async buy(buyItemDto: BuyItemDto, user: User): Promise<UserItems> {
    const item = this.create({
      itemId: buyItemDto.itemId,
      userId: user.id,
    });

    try {
      await this.save(item);
    } catch (error) {
      this.logger.error(
        `Buy item failed: ${JSON.stringify({
          buyItemDto,
        })}`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }

    return item;
  }
}
