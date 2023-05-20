import { Test, TestingModule } from '@nestjs/testing';
import { BrisageController } from '../brisage.controller';
import { BrisageService } from '../brisage.service';
import { EquipementService } from '../../equipement/equipement.service';
import { arrayBrisage, newBrisage, newEquipement } from './mocks/BrisageMock';

describe('Brisage Controller', () => {
  let controller: BrisageController;
  let service: BrisageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrisageController],
      providers: [
        BrisageService,
        EquipementService,
        {
          provide: EquipementService,
          useValue: {
            findOne: jest.fn(),
            create: jest.fn().mockResolvedValueOnce(newEquipement as any),
          },
        },
        {
          provide: BrisageService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(arrayBrisage),
            create: jest.fn().mockResolvedValue(newBrisage),
          },
        },
      ],
    }).compile();

    controller = module.get<BrisageController>(BrisageController);
    service = module.get<BrisageService>(BrisageService);
  });

  describe('create()', () => {
    it("should create a brisage AND an equipement if the equipement doesn't exist", async () => {
      expect(controller.create(newBrisage)).resolves.toEqual(newBrisage);
    });
  });

  describe('findAll()', () => {
    it('should return an array of brisage', async () => {
      expect(controller.findAll()).resolves.toEqual(arrayBrisage);
    });
  });
});
