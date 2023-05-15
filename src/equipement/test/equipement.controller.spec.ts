import { Test, TestingModule } from '@nestjs/testing';
import { EquipementController } from '../equipement.controller';
import { EquipementService } from '../equipement.service';
import { equipementArray, newEquipement } from './mocks/EquimentMock';

describe('Equipement Controller', () => {
  let controller: EquipementController;
  let service: EquipementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EquipementController],
      providers: [
        {
          provide: EquipementService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(equipementArray),
            create: jest.fn().mockResolvedValue(newEquipement),
          },
        },
      ],
    }).compile();

    controller = module.get<EquipementController>(EquipementController);
    service = module.get<EquipementService>(EquipementService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create()', () => {
    it('should create an equipement', async () => {
      expect(controller.create(newEquipement)).resolves.toEqual(newEquipement);
      expect(service.create).toHaveBeenCalledWith(newEquipement);
    });
  });

  describe('findAll()', () => {
    it('should return an array of cats', async () => {
      expect(controller.findAll()).resolves.toEqual(equipementArray);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});
