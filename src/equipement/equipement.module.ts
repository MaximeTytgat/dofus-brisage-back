import { Module } from '@nestjs/common';
import { EquipementService } from './equipement.service';
import { EquipementController } from './equipement.controller';

@Module({
  providers: [EquipementService],
  controllers: [EquipementController],
})
export class EquipementModule {}
