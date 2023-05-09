import { ShopService } from './shop.service';
import { User } from 'src/auth/user.entity';
import { BuyItemDto } from './dto/buy-item.dto';
export declare class ShopController {
    private readonly shopService;
    constructor(shopService: ShopService);
    buy(buyItemDto: BuyItemDto, user: User): Promise<import("./entities/user-item.entity").UserItems>;
}
