import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EquipementModule } from './equipement/equipement.module';
import { RessourceModule } from './ressource/ressource.module';
import { BrisageModule } from './brisage/brisage.module';
import { DofusDBItemModule } from './dofus_db_items/dofus_db_items.module';
import { EffectsModule } from './effects/effects.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest', {
      connectionName: 'nest',
    }),
    MongooseModule.forRoot('mongodb://localhost/dofusdb', {
      connectionName: 'dofusdb',
    }),
    EquipementModule,
    RessourceModule,
    BrisageModule,
    DofusDBItemModule,
    EffectsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
