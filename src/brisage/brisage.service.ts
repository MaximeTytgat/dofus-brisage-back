import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Brisage } from './schemas/brisage.schema';
import { CreateBrisageDto } from './dto/create-brisage.dto';

@Injectable()
export class BrisageService {
  constructor(
    @InjectModel(Brisage.name, 'nest') private readonly brisageModel: Model<Brisage>,
  ) {}

  async create(createBrisageDto: CreateBrisageDto): Promise<Brisage> {
    const createdCat = await this.brisageModel.create(createBrisageDto);
    return createdCat;
  }

  async findAll(): Promise<Brisage[]> {
    console.log('findAll');

    return this.brisageModel
      .find()
      .populate({
        path: 'equipement',
        populate: [{
          path: 'craft',
          populate: {
            path: 'ressource'
          }
        }, {
          path: 'effects',
          populate: {
            path: 'effect'
          }
        }],
      })
      .exec();
  }
}
