import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { ShopService } from './shop.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { BuyItemDto } from './dto/buy-item.dto';

@Controller('shop')
@UseGuards(AuthGuard('jwt'))
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post()
  buy(@Body() buyItemDto: BuyItemDto, @GetUser() user: User) {
    return this.shopService.buy(buyItemDto, user);
  }
}
