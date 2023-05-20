import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Ressource } from 'src/ressource/ressource.interface';
import { Effects } from 'src/effects/schemas/effects.schema';
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

  @Prop()
  categorie?: string;

  @Prop()
  img?: string;

  @Prop({
    type: [
      {
        effect: { type: mongoose.Schema.Types.ObjectId, ref: 'Effects' },
        from: Number,
        to: Number,
      },
    ],
  })
  effects?: {
    effect: mongoose.Schema.Types.ObjectId;
    from: number;
    to: number;
  }[];
  
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
