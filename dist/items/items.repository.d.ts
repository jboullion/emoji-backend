import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './entities/item.entity';
export declare class ItemsRepository extends Repository<Item> {
    private logger;
    createItem(createItemDto: CreateItemDto): Promise<Item>;
    getItems(): Promise<Item[]>;
}
