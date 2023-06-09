import { Module } from '@nestjs/common';
import { RessourceService } from './ressource.service';
import { RessourceController } from './ressource.controller';
import { Ressource, RessourceSchema } from './schemas/ressource.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { DofusDBItemModule } from 'src/dofus_db_items/dofus_db_items.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ressource.name, schema: RessourceSchema },
    ], 'nest'),
    DofusDBItemModule,
  ],
  controllers: [RessourceController],
  providers: [RessourceService],
  exports: [RessourceService],
})
export class RessourceModule {}
