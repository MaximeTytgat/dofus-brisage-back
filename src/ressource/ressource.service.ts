import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ressource } from './schemas/ressource.schema';

@Injectable()
export class RessourceService {
  constructor(
    @InjectModel(Ressource.name)
    private readonly ressourceModel: Model<Ressource>,
  ) {}

  async createOrUpdate(ressourceData: any): Promise<Ressource> {
    const { name } = ressourceData;
    const existingRessource = await this.ressourceModel.findOneAndUpdate(
      { name },
      ressourceData,
      { upsert: true, new: true },
    );
    return existingRessource;
  }
}
