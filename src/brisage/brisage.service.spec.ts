import { Test, TestingModule } from '@nestjs/testing';
import { BrisageService } from './brisage.service';

describe('BrisageService', () => {
  let service: BrisageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrisageService],
    }).compile();

    service = module.get<BrisageService>(BrisageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
