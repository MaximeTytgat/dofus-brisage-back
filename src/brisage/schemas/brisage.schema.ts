import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Equipement } from '../../equipement/schemas/equipement.schema';

export type BrisageDocument = HydratedDocument<Brisage>;

@Schema()
export class Brisage {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Equipement',
  })
  equipement: Equipement;

  @Prop()
  pourcentage_brisage?: number;

  @Prop()
  coup_totale?: number;

  @Prop()
  resultat?: number;
}

export const BrisageSchema = SchemaFactory.createForClass(Brisage);
