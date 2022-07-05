import { Test, TestingModule } from '@nestjs/testing';
import { DownvotesService } from './downvotes.service';

describe('DownvotesService', () => {
  let service: DownvotesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DownvotesService],
    }).compile();

    service = module.get<DownvotesService>(DownvotesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
