import { Test, TestingModule } from '@nestjs/testing';
import { DownvotesController } from './downvotes.controller';

describe('DownvotesController', () => {
  let controller: DownvotesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DownvotesController],
    }).compile();

    controller = module.get<DownvotesController>(DownvotesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
