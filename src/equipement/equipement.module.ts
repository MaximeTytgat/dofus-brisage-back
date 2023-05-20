import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EquipementService } from './equipement.service';
import { EquipementController } from './equipement.controller';
import { Equipement, EquipementSchema } from './schemas/equipement.schema';
import { RessourceModule } from 'src/ressource/ressource.module';
import { DofusDBItemModule } from 'src/dofus_db_items/dofus_db_items.module';
import { EffectsModule } from 'src/effects/effects.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Equipement.name, schema: EquipementSchema },
    ], 'nest'),
    RessourceModule,
    DofusDBItemModule,
    EffectsModule
  ],
  controllers: [EquipementController],
  providers: [EquipementService],
  exports: [EquipementService],
})
export class EquipementModule {}
