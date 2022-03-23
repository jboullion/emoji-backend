import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetEmojisFilterDto } from './dto/get-emojis-filter.dto';
import { Emoji } from './emoji.entity';
import { EmojisRepository } from './emojis.repository';

@Injectable()
export class EmojisService {
  constructor(
    @InjectRepository(EmojisRepository)
    private emojisRepository: EmojisRepository,
  ) {}

  async getEmojis(filterDto: GetEmojisFilterDto): Promise<Emoji[]> {
    return await this.emojisRepository.getEmojis(filterDto);
  }
}
