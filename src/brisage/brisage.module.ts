import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrisageService } from './brisage.service';
import { BrisageController } from './brisage.controller';
import { Brisage, BrisageSchema } from './schemas/brisage.schema';
import { EquipementModule } from 'src/equipement/equipement.module';
import { RessourceModule } from 'src/ressource/ressource.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Brisage.name, schema: BrisageSchema }]),
    EquipementModule,
    RessourceModule,
  ],
  controllers: [BrisageController],
  providers: [BrisageService],
})
export class BrisageModule {}
