import { Module } from '@nestjs/common';
import { DownvotesService } from './downvotes.service';
import { DownvotesController } from './downvotes.controller';

@Module({
  providers: [DownvotesService],
  controllers: [DownvotesController]
})
export class DownvotesModule {}
