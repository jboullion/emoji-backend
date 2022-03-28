import { Module } from '@nestjs/common';
import { MemoryGateway } from './memory.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [MemoryGateway],
})
export class MemoryModule {}
