import { InternalServerErrorException, Logger } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { GetEmojisFilterDto } from './dto/get-emojis-filter.dto';
import { Emoji } from './emoji.entity';

@EntityRepository(Emoji)
export class EmojisRepository extends Repository<Emoji> {
  private logger = new Logger('EmojisRepository', { timestamp: true });

  async getEmojis(filterDto: GetEmojisFilterDto): Promise<Emoji[]> {
    const { search, parent_cat, child_cat } = filterDto;

    const query = this.createQueryBuilder('emoji');

    if (search) {
      // NOTE: For case insensative queries you can use ILIKE
      // NOTE: For improved performance creating an index on idx_title = LOWER(title)  can be helpful
      // NOTE: If sensative / attached to a user make sure to wrap in () to ensure the "AND" affects both search columns
      query.andWhere('(LOWER(emoji.short_name) LIKE :search)', {
        search: `%${search.toLowerCase()}%`,
      });
    }

    if (parent_cat) {
      query.andWhere('(LOWER(emoji.parent_cat) LIKE :parent_cat)', {
        parent_cat: `%${parent_cat.toLowerCase()}%`,
      });
    }

    if (child_cat) {
      query.andWhere('(LOWER(emoji.child_cat) LIKE :child_cat)', {
        child_cat: `%${child_cat.toLowerCase()}%`,
      });
    }

    try {
      const emojis = await query.getMany();
      return emojis;
    } catch (error) {
      this.logger.error(
        `getEmojis failed. Filters: ${JSON.stringify({
          filterDto,
        })}`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }
}
