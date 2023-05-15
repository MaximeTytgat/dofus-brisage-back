import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EquipementService } from './equipement.service';
import { EquipementController } from './equipement.controller';
import { Equipement, EquipementSchema } from './schemas/equipement.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Equipement.name, schema: EquipementSchema },
    ]),
  ],
  controllers: [EquipementController],
  providers: [EquipementService],
  exports: [EquipementService],
})
export class EquipementModule {}
