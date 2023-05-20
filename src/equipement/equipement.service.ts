import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Equipement } from './schemas/equipement.schema';
import {
  CreateEquipementDto,
  SearchEquipementDto,
} from './dto/create-equipement.dto';

import { DofusDBItemService } from 'src/dofus_db_items/dofus_db_items.service';
import { EffectsService } from 'src/effects/effects.service';
import { RessourceService } from 'src/ressource/ressource.service';
import { Effects } from 'src/effects/schemas/effects.schema';
import { Items } from 'src/dofus_db_items/schemas/dofus_db_items.schema';

@Injectable()
export class EquipementService {
  constructor(
    @InjectModel(Equipement.name, 'nest')
    private readonly equipementModel: Model<Equipement>,
    private readonly ressourceService: RessourceService,
    private readonly dofusDBItemService: DofusDBItemService,
    private readonly effectsService: EffectsService,
  ) {}

  async create(createEquipementDto: CreateEquipementDto): Promise<Equipement> {
    const createdEquipement = await this.equipementModel.create(
      createEquipementDto,
    );
    return createdEquipement;
  }

  async createOrUpdate(
    equipementData: CreateEquipementDto,
  ): Promise<Equipement> {
    const { name, craft, ...otherFields } = equipementData;

    // Get the item from dofus db and the effects list
    const dofusDBItem: Items = await this.dofusDBItemService.findOneItem(name);
    const effects: Effects[] = await this.effectsService.findAll();

    // Create a list of effects with the dofusdb_id as key
    let effectList: Effects[] = [];
    effects.map((effect) => effectList[effect.dofusdb_id] = effect);

    // Create a list of effects from the dofus db item
    const equipementEffects = dofusDBItem.effects.map((dofusDBItemEffect) => {
      if (effectList[dofusDBItemEffect.characteristic]) {
        return {
          effect: effectList[dofusDBItemEffect.characteristic],
          from: dofusDBItemEffect.from,
          to: dofusDBItemEffect.to,
        }
      }
    });
    
    // Create or update the ressources
    const craftWithRessources = await Promise.all(
      craft.map(async (craftItem) => {
        const { ressource, nombre } = craftItem;
        const newRessource = await this.ressourceService.createOrUpdate(
          ressource,
        );
        return { ressource: newRessource, nombre };
      }),
    );
    
    const existingEquipement = await this.equipementModel.findOneAndUpdate(
      { name },
      { name, img: dofusDBItem.img, craft: craftWithRessources, effects:  equipementEffects, ...otherFields },
      { upsert: true, new: true },
    );

    return existingEquipement;
  }

  async findOne(searchEquipementDto: SearchEquipementDto): Promise<Equipement> {
    return this.equipementModel.findOne(searchEquipementDto).exec();
  }

  async findAll(): Promise<Equipement[]> {
    return this.equipementModel.find().exec();
  }
}
