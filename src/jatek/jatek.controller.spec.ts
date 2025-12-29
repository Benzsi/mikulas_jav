import { Test, TestingModule } from '@nestjs/testing';
import { JatekController } from './jatek.controller';
import { JatekService } from './jatek.service';

describe('JatekController', () => {
  let controller: JatekController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JatekController],
      providers: [JatekService],
    }).compile();

    controller = module.get<JatekController>(JatekController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
