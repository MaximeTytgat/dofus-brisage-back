import { Test, TestingModule } from '@nestjs/testing';
import { EquipementService } from '../equipement.service';
import { getModelToken } from '@nestjs/mongoose';
import { Equipement } from '../schemas/equipement.schema';
import { Model } from 'mongoose';
import { Logger } from '@nestjs/common';
import { equipementArray, newEquipement } from './mocks/EquimentMock';

describe('EquipementService', () => {
  let service: EquipementService;
  let model: Model<Equipement>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EquipementService,
        {
          provide: getModelToken('Equipement'),
          useValue: {
            new: jest.fn().mockResolvedValue(newEquipement),
            constructor: jest.fn().mockResolvedValue(newEquipement),
            find: jest.fn().mockReturnValue({
              exec: jest.fn().mockResolvedValueOnce(equipementArray),
            } as any),
            findOne: jest.fn().mockReturnValue({
              exec: jest.fn().mockResolvedValueOnce(equipementArray[1]),
            } as any) as any,
            create: jest.fn().mockResolvedValueOnce(newEquipement as any),
            exec: jest.fn(),
          },
        },
        {
          provide: Logger,
          useValue: {
            log: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<EquipementService>(EquipementService);
    model = module.get<Model<Equipement>>(getModelToken('Equipement'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it should create a equipement and return result
  it('should create a equipement and return result', async () => {
    const equipement = await service.create(newEquipement);
    expect(equipement).toEqual(newEquipement);
  });

  it('should return all equipement', async () => {
    const equipement = await service.findAll();
    expect(equipement).toEqual(equipementArray);
  });

  it('should return a equipement by name', async () => {
    const equipement: Equipement = await service.findOne({
      name: '[Equipement2]',
    });
    expect(equipement).toEqual(equipementArray[1]);
  });
});
