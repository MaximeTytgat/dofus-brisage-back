import { Module } from '@nestjs/common';
import { DofusDBItemService } from './dofus_db_items.service';
import { Items, DofusDBItemSchema } from './schemas/dofus_db_items.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Items.name, schema: DofusDBItemSchema },
    ], 'dofusdb'),
  ],
  providers: [DofusDBItemService],
  exports: [DofusDBItemService],
})
export class DofusDBItemModule {}
