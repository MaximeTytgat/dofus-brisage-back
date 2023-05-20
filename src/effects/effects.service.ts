import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateEffectDto } from './dto/create-effect.dto';
import { UpdateEffectDto } from './dto/update-effect.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Effects } from './schemas/effects.schema';
import { Model } from 'mongoose';
import { effectsdata } from './seeds/effects.data';

@Injectable()
export class EffectsService implements OnModuleInit {
  constructor(
    @InjectModel(Effects.name, 'nest')
    private readonly effectsModel: Model<Effects>,
  ) {}
  
  // Seeding effects data
  async onModuleInit() {
    const effects = await this.effectsModel.find();
    if (!effects[0]) {
      effectsdata.forEach(async (effect) => {
          await this.effectsModel.create(effect);
      });
    }
  }

  create(createEffectDto: CreateEffectDto) {
    return this.effectsModel.create(createEffectDto);
  }

  findAll() {
    return this.effectsModel.find();
  }

  findOne(id: number) {
    return this.effectsModel.findOne({ _id: id });
  }

  update(id: number, updateEffectDto: UpdateEffectDto) {
    return this.effectsModel.updateOne({ _id: id }, updateEffectDto);
  }

  remove(id: number) {
    return this.effectsModel.deleteOne({ _id: id });
  }

  removeAll() {
    return this.effectsModel.deleteMany({});
  }
}
