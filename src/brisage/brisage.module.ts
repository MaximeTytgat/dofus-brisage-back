import { Module } from '@nestjs/common';
import { BrisageService } from './brisage.service';
import { BrisageController } from './brisage.controller';

@Module({
  providers: [BrisageService],
  controllers: [BrisageController],
})
export class BrisageModule {}
