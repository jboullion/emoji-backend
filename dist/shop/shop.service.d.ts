import { User } from 'src/auth/user.entity';
import { BuyItemDto } from './dto/buy-item.dto';
import { ShopRepository } from './shop.repository';
export declare class ShopService {
    private shopRepository;
    constructor(shopRepository: ShopRepository);
    buy(buyItemDto: BuyItemDto, user: User): Promise<import("./entities/user-item.entity").UserItems>;
}
