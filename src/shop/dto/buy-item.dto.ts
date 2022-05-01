import { IsNumberString } from 'class-validator';

export class BuyItemDto {
  @IsNumberString()
  itemId: number;
}
