import { IsOptional, IsString } from 'class-validator';

export class GetEmojisFilterDto {
  @IsOptional()
  @IsString()
  search?: string;
  @IsOptional()
  @IsString()
  parent_cat?: string;
  @IsOptional()
  @IsString()
  child_cat?: string;
}
