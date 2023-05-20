import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ressource } from './schemas/ressource.schema';
import { DofusDBItemService } from 'src/dofus_db_items/dofus_db_items.service';
import { Items } from 'src/dofus_db_items/schemas/dofus_db_items.schema';

@Injectable()
export class RessourceService {
  constructor(
    @InjectModel(Ressource.name, 'nest')
    private readonly ressourceModel: Model<Ressource>,
    private readonly dofusDBItemService: DofusDBItemService,
  ) {}

  async createOrUpdate(ressourceData: any): Promise<Ressource> {
    const { name } = ressourceData;

    // Get the item from dofus db and get the img url
    const dofusDBItem: Items = await this.dofusDBItemService.findOneItem(name);    

    // Create or update the ressources
    const existingRessource = await this.ressourceModel.findOneAndUpdate(
      { name },
      { img: dofusDBItem?.img || "", ...ressourceData },
      { upsert: true, new: true },
    );
    return existingRessource;
  }
}
