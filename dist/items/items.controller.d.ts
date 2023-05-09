import { ItemsService } from './items.service';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(): Promise<import("./entities/item.entity").Item[]>;
    findOne(id: string): string;
}
