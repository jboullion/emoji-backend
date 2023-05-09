"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemsRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const item_entity_1 = require("./entities/item.entity");
let ItemsRepository = class ItemsRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger('ItemsRepository', { timestamp: true });
    }
    async createItem(createItemDto) {
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
    async getItems() {
        const query = this.createQueryBuilder('item');
        try {
            const items = await query.getMany();
            return items;
        }
        catch (error) {
            this.logger.error(`getItems failed`, error.stack);
            throw new common_1.InternalServerErrorException();
        }
    }
};
ItemsRepository = __decorate([
    (0, typeorm_1.EntityRepository)(item_entity_1.Item)
], ItemsRepository);
exports.ItemsRepository = ItemsRepository;
//# sourceMappingURL=items.repository.js.map