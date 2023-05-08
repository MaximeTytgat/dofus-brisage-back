import { Test, TestingModule } from '@nestjs/testing';
import { RessourceController } from './ressource.controller';

describe('RessourceController', () => {
  let controller: RessourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RessourceController],
    }).compile();

    controller = module.get<RessourceController>(RessourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
