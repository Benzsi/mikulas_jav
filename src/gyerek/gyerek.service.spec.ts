import { Test, TestingModule } from '@nestjs/testing';
import { GyerekService } from './gyerek.service';

describe('GyerekService', () => {
  let service: GyerekService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GyerekService],
    }).compile();

    service = module.get<GyerekService>(GyerekService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
