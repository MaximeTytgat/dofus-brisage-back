import { Test, TestingModule } from '@nestjs/testing';
import { BrisageService } from '../brisage.service';
import { getModelToken } from '@nestjs/mongoose';
import { Brisage } from '../schemas/brisage.schema';
import { Model } from 'mongoose';
import { CreateBrisageDto } from '../dto/create-brisage.dto';

const newBrisage: CreateBrisageDto = {
  equipement: { name: '[Equipement]' },
  pourcentage_brisage: 80,
  coup_totale: 150000,
  resultat: 90000,
};

describe('BrisageService', () => {
  let service: BrisageService;
  let model: Model<Brisage>;

  const brisageArray: Brisage[] = [
    {
      equipement: {
        name: '[Equipement1]',
      },
      pourcentage_brisage: 150,
      coup_totale: 2000,
      resultat: 3000,
    },
    {
      equipement: {
        name: '[Equipement2]',
      },
      pourcentage_brisage: 45,
      coup_totale: 15230,
      resultat: 15420,
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BrisageService,
        {
          provide: getModelToken('Brisage'),
          useValue: {
            find: jest.fn().mockReturnValue({
              populate: jest.fn().mockReturnValue({
                exec: jest.fn().mockResolvedValueOnce(brisageArray),
              } as any),
            } as any),
            create: jest.fn().mockResolvedValueOnce(newBrisage as any),
          },
        },
      ],
    }).compile();

    service = module.get<BrisageService>(BrisageService);
    model = module.get<Model<Brisage>>(getModelToken('Brisage'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it should return all brisage with populate equipement
  it('should return all brisage', async () => {
    const brisage = await service.findAll();
    expect(brisage).toEqual(brisageArray);
  });

  // it should create a new brisaage and return result
  it('should create a new brisaage and return result', async () => {
    const brisage = await service.create(newBrisage);
    expect(brisage).toEqual(newBrisage);
  });
});
