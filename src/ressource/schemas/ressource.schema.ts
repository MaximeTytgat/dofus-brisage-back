import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ressourceDocument = HydratedDocument<Ressource>;

@Schema()
export class Ressource {
  @Prop({ required: true })
  name: string;

  @Prop()
  categorie?: string;

  @Prop()
  poids?: number;

  @Prop()
  prix_moyen?: number;
}

export const ressourceSchema = SchemaFactory.createForClass(Ressource);
