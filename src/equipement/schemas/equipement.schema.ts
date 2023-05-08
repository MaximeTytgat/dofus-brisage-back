import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

import type {
  CaracteristiquesPrimaires,
  CaracteristiquesSecondaires,
  Dommages,
  Resistances,
  RessourceNumber,
} from '../equipement.interface';

export type equipementDocument = HydratedDocument<Equipement>;

@Schema()
export class Equipement {
  @Prop({ required: true })
  name: string;

  @Prop()
  pourcentage_brisage?: number;

  @Prop()
  caracteristiques_primaires?: CaracteristiquesPrimaires;

  @Prop()
  caracteristiques_secondaires?: CaracteristiquesSecondaires;

  @Prop()
  dommages?: Dommages;

  @Prop()
  resistances?: Resistances;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ressource' }] })
  craft?: RessourceNumber[];
}

export const equipementSchema = SchemaFactory.createForClass(Equipement);
