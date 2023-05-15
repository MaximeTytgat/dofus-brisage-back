import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Equipement } from './schemas/equipement.schema';
import {
  CreateEquipementDto,
  SearchEquipementDto,
} from './dto/create-equipement.dto';

@Injectable()
export class EquipementService {
  constructor(
    @InjectModel(Equipement.name)
    private readonly equipementModel: Model<Equipement>,
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

    const existingEquipement = await this.equipementModel.findOneAndUpdate(
      { name },
      { name, craft: craft, ...otherFields },
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
