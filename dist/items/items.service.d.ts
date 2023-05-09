import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './entities/item.entity';
import { ItemsRepository } from './items.repository';
export declare class ItemsService {
    private itemsRepository;
    constructor(itemsRepository: ItemsRepository);
    createItem(createItemDto: CreateItemDto): Promise<Item>;
    findAll(): Promise<Item[]>;
    findOne(id: number): string;
}
