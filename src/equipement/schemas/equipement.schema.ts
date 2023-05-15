import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Ressource } from 'src/ressource/ressource.interface';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

import type {
  CaracteristiquesPrimaires,
  CaracteristiquesSecondaires,
  Dommages,
  Resistances,
} from '../equipement.interface';

export type EquipementDocument = HydratedDocument<Equipement>;

@Schema()
export class Equipement {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  pourcentage_brisage?: number;

  @Prop({ type: Object })
  caracteristiques_primaires?: CaracteristiquesPrimaires;

  @Prop({ type: Object })
  caracteristiques_secondaires?: CaracteristiquesSecondaires;

  @Prop({ type: Object })
  dommages?: Dommages;

  @Prop({ type: Object })
  resistances?: Resistances;

  @Prop({
    type: [
      {
        ressource: { type: mongoose.Schema.Types.ObjectId, ref: 'Ressource' },
        nombre: Number,
      },
    ],
  })
  craft?: {
    ressource: Ressource;
    nombre: number;
  }[];
}

export const EquipementSchema = SchemaFactory.createForClass(Equipement);
