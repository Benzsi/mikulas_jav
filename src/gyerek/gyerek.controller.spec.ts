import { Test, TestingModule } from '@nestjs/testing';
import { GyerekController } from './gyerek.controller';
import { GyerekService } from './gyerek.service';

describe('GyerekController', () => {
  let controller: GyerekController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GyerekController],
      providers: [GyerekService],
    }).compile();

    controller = module.get<GyerekController>(GyerekController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
