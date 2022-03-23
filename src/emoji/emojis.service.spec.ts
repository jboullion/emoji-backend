import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { Emoji } from './emoji.entity';
import { EmojisRepository } from './emojis.repository';
import { EmojisService } from './emojis.service';

const mockEmojisRepository = () => ({
  getEmojis: jest.fn(),
  findOne: jest.fn(),
});

// const mockEmoji: Emoji = {
//   id: 10,
//   icon: '👩🏾‍❤️‍👩🏾',
//   parent_cat: 'people',
//   child_cat: 'heart',
//   short_name: 'couple with heart: woman, medium-dark skin tone',
// };

describe('EmojiService', () => {
  let emojisService: EmojisService;
  let emojisRepository;

  beforeEach(async () => {
    // initialize a nestjs module with a emojiService and emojiRepository
    const module = await Test.createTestingModule({
      providers: [
        EmojisService,
        {
          provide: EmojisRepository,
          useFactory: mockEmojisRepository,
        },
      ],
    }).compile();

    emojisService = await module.get(EmojisService);
    emojisRepository = await module.get(EmojisRepository);
  });

  describe('getEmojis', () => {
    it('calls EmojiRepository.getEmojis and returns an array of emojis', async () => {
      emojisRepository.getEmojis.mockResolvedValue('someValue');
      const result = await emojisService.getEmojis(null);

      expect(result).toEqual('someValue');
    });
  });
});
