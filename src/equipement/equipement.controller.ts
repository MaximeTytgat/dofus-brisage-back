import { Body, Controller, Get, Post } from '@nestjs/common';
import { EquipementService } from './equipement.service';
import { Equipement } from './schemas/equipement.schema';
import {
  CreateEquipementDto,
  SearchEquipementDto,
} from './dto/create-equipement.dto';

@Controller('equipement')
export class EquipementController {
  constructor(private readonly equipementService: EquipementService) {}

  @Post()
  async create(
    @Body() createEquipementDto: CreateEquipementDto,
  ): Promise<void> {
    console.log(createEquipementDto);
    await this.equipementService.create(createEquipementDto);
  }

  @Get('/name')
  async findOne(
    @Body() searchEquipementDto: SearchEquipementDto,
  ): Promise<Equipement> {
    return this.equipementService.findOne(searchEquipementDto);
  }

  @Get()
  async findAll(): Promise<Equipement[]> {
    return this.equipementService.findAll();
  }
}
