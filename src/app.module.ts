import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EquipementModule } from './equipement/equipement.module';
import { RessourceModule } from './ressource/ressource.module';
import { BrisageModule } from './brisage/brisage.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    EquipementModule,
    RessourceModule,
    BrisageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
