import { User } from 'src/auth/user.entity';
import { Repository } from 'typeorm';
import { BuyItemDto } from './dto/buy-item.dto';
import { UserItems } from './entities/user-item.entity';
export declare class ShopRepository extends Repository<UserItems> {
    private logger;
    buy(buyItemDto: BuyItemDto, user: User): Promise<UserItems>;
}
