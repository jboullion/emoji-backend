"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_item_entity_1 = require("./entities/user-item.entity");
let ShopRepository = class ShopRepository extends typeorm_1.Repository {
    constructor() {
        super(...arguments);
        this.logger = new common_1.Logger('ShopRepository', { timestamp: true });
    }
    async buy(buyItemDto, user) {
        const item = this.create({
            itemId: buyItemDto.itemId,
            userId: user.id,
        });
        try {
            await this.save(item);
        }
        catch (error) {
            this.logger.error(`Buy item failed: ${JSON.stringify({
                buyItemDto,
            })}`, error.stack);
            throw new common_1.InternalServerErrorException();
        }
        return item;
    }
};
ShopRepository = __decorate([
    (0, typeorm_1.EntityRepository)(user_item_entity_1.UserItems)
], ShopRepository);
exports.ShopRepository = ShopRepository;
//# sourceMappingURL=shop.repository.js.map