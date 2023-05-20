import { Module } from '@nestjs/common';
import { EffectsService } from './effects.service';
import { EffectsController } from './effects.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Effects, EffectsSchema } from './schemas/effects.schema';



@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Effects.name, schema: EffectsSchema },
    ], 'nest'),
  ],
  controllers: [EffectsController],
  providers: [EffectsService],
  exports: [EffectsService]
})
export class EffectsModule {}
