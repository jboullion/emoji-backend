import { Controller, Get, Param, Query } from '@nestjs/common';
import { GetEmojisFilterDto } from './dto/get-emojis-filter.dto';

import { Emoji } from './emoji.entity';
import { EmojisService } from './emojis.service';
import { Logger } from '@nestjs/common';

@Controller('emojis')
export class EmojisController {
  private logger = new Logger('EmojisController', { timestamp: true });

  constructor(private emojisService: EmojisService) {}

  @Get('/:icon')
  async getEmojiByIcon(@Param('icon') icon: string): Promise<Emoji> {
    return await this.emojisService.getEmojiByIcon(icon);
  }

  @Get()
  async getEmojis(@Query() filterDto: GetEmojisFilterDto): Promise<Emoji[]> {
    return await this.emojisService.getEmojis(filterDto);
  }
}
