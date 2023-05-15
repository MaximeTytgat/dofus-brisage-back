import { CreateBrisageDto } from './dto/create-brisage.dto';
import { BrisageService } from './brisage.service';
import { EquipementService } from '../equipement/equipement.service';
import { Brisage } from './schemas/brisage.schema';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { RessourceService } from 'src/ressource/ressource.service';

@Controller('brisage')
export class BrisageController {
  constructor(
    private readonly brisageService: BrisageService,
    private readonly equipementService: EquipementService,
    private readonly ressourceService: RessourceService,
  ) {}

  @Post()
  async create(@Body() createBrisageDto: CreateBrisageDto) {
    const { equipement: equipementData, ...brisageData } = createBrisageDto;
    const { craft, ...equipement } = equipementData;

    const craftWithRessources = await Promise.all(
      craft.map(async (craftItem) => {
        const { ressource, nombre } = craftItem;
        const newRessource = await this.ressourceService.createOrUpdate(
          ressource,
        );
        return { ressource: newRessource, nombre };
      }),
    );

    equipement['craft'] = craftWithRessources;

    console.log(equipement);

    const newEquipement = await this.equipementService.createOrUpdate(
      equipement,
    );

    const brisage = await this.brisageService.create({
      equipement: newEquipement,
      ...brisageData,
    });

    return brisage;
  }

  @Get()
  async findAll(): Promise<Brisage[]> {
    return this.brisageService.findAll();
  }
}
