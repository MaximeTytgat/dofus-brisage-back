import { CreateBrisageDto } from './dto/create-brisage.dto';
import { BrisageService } from './brisage.service';
import { EquipementService } from '../equipement/equipement.service';
import { Brisage } from './schemas/brisage.schema';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Equipement } from 'src/equipement/schemas/equipement.schema';

@Controller('brisage')
export class BrisageController {
  constructor(
    private readonly brisageService: BrisageService,
    private readonly equipementService: EquipementService,
  ) {}

  @Post()
  async create(@Body() createBrisageDto: CreateBrisageDto) {
    const { equipement: equipementData, ...brisageData } = createBrisageDto;

    const newEquipement : Equipement = await this.equipementService.createOrUpdate(
      equipementData,
    );

    return await this.brisageService.create({
      equipement: newEquipement,
      ...brisageData,
    });
  }

  @Get()
  async findAll(): Promise<Brisage[]> {
    return this.brisageService.findAll();
  }
}
