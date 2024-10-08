import { Test, TestingModule } from '@nestjs/testing';
import { CommnetController } from './commnet.controller';
import { CommnetService } from './commnet.service';

describe('CommnetController', () => {
  let controller: CommnetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommnetController],
      providers: [CommnetService],
    }).compile();

    controller = module.get<CommnetController>(CommnetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
