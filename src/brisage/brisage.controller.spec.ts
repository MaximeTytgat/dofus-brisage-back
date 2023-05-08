import { Test, TestingModule } from '@nestjs/testing';
import { BrisageController } from './brisage.controller';

describe('BrisageController', () => {
  let controller: BrisageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrisageController],
    }).compile();

    controller = module.get<BrisageController>(BrisageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
