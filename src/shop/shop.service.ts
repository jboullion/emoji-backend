import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { BuyItemDto } from './dto/buy-item.dto';
import { ShopRepository } from './shop.repository';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(ShopRepository) private shopRepository: ShopRepository,
  ) {}

  async buy(buyItemDto: BuyItemDto, user: User) {
    this.shopRepository.buy(buyItemDto, user);
    return await this.shopRepository.buy(buyItemDto, user);
  }
}
