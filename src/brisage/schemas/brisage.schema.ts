import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

import { Equipement } from '../../equipement/schemas/equipement.schema';

export type brisageDocument = HydratedDocument<Brisage>;

@Schema()
export class Brisage {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'equipement' })
  equipement: Equipement;

  @Prop()
  pourcentage_brisage?: number;
}

export const brisageSchema = SchemaFactory.createForClass(Brisage);
