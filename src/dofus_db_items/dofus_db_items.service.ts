import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Items } from './schemas/dofus_db_items.schema';

@Injectable()
export class DofusDBItemService {
  constructor(
    @InjectModel(Items.name, 'dofusdb')
    private readonly dofusDBItemModel: Model<Items>,
  ) {}

  async findOneItem(itemName: string): Promise<Items> {
    const name = itemName.substring(1, itemName.length - 1);
    
    const existingDofusDBItem = await this.dofusDBItemModel.findOne(
      { 'name.fr': name }
    );
    return existingDofusDBItem;
  }
}
