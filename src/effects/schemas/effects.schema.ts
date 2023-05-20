import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EffectsDocument = HydratedDocument<Effects>;

@Schema()
export class Effects {
  @Prop({ required: true, unique: true, type: Number })
  dofusdb_id: number;
  
  @Prop({ required: true, unique: true, type: String })
  name: string;

  @Prop({ required: true, unique: true, type: String })
  rune_name: string;
  
  @Prop({ required: true, type: Number })
  density: number;

  @Prop({ type: String, enum: ['Feu', 'Eau', 'Air', 'Terre', 'Neutre'] })
  element: string;

  @Prop({ type: String, enum: ['CP', 'CS', 'D', 'R']})
  categorie?: string;

  @Prop({ type: String })
  img?: string;

  @Prop({ type: String })
  rune_img?: string;
}

export const EffectsSchema = SchemaFactory.createForClass(Effects);
