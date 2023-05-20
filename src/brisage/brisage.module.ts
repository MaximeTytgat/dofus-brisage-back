import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrisageService } from './brisage.service';
import { BrisageController } from './brisage.controller';
import { Brisage, BrisageSchema } from './schemas/brisage.schema';
import { EquipementModule } from 'src/equipement/equipement.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Brisage.name, schema: BrisageSchema }], 'nest'),
    EquipementModule,
  ],
  controllers: [BrisageController],
  providers: [BrisageService],
})
export class BrisageModule {}
