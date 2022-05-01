import { Controller, Get, Param } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
//@UseGuards(AuthGuard())
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemsService.findOne(+id);
  }

  // @Post()
  // generateStore() {
  //   // TODO: Move this somewhere
  // export interface IShopItem {
  //   id: number;
  //   emoji: string;
  //   name: string;
  //   description: string;
  //   tickets: number;
  // }

  //   const shopItems: IShopItem[] = [
  //     {
  //       id: 1,
  //       emoji: '🎆',
  //       name: 'Firework',
  //       description: 'Clicking creates fireworks!',
  //       tickets: 100,
  //     },
  //     {
  //       id: 2,
  //       emoji: '🔥',
  //       name: 'Fireball',
  //       description: 'Clicking creates a fireball!',
  //       tickets: 100,
  //     },
  //     {
  //       id: 3,
  //       emoji: '❤️',
  //       name: 'Heart',
  //       description: 'Stamp a heart onto the screen!',
  //       tickets: 50,
  //     },
  //     {
  //       id: 4,
  //       emoji: '💋',
  //       name: 'Kiss',
  //       description: 'Stamp a kiss onto the screen!',
  //       tickets: 50,
  //     },
  //     {
  //       id: 5,
  //       emoji: '🕳️',
  //       name: 'Black Hole',
  //       description: 'Pulls in other emojis!',
  //       tickets: 200,
  //     },
  //     {
  //       id: 6,
  //       emoji: '🧯',
  //       name: 'Fire Extinguisher',
  //       description: 'Spray foam and put out fires!',
  //       tickets: 150,
  //     },
  //   ];

  //   shopItems.forEach(async (item) => {
  //     this.itemsService.createItem(item);
  //   });
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.itemsService.remove(+id);
  // }
}
