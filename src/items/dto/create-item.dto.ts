import { IsNumber, IsString } from 'class-validator';

export class CreateItemDto {
  @IsString()
  emoji: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  tickets: number;
}
