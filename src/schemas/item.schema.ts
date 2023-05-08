import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type equipementDocument = HydratedDocument<equipement>;

interface CaracteristiquesPrimaires {
  ga_pa?: number;
  ga_pme?: number;
  po?: number;
  vi?: number;
  age?: number;
  cha?: number;
  fo?: number;
  ine?: number;
  pui?: number;
  cri?: number;
  sa?: number;
}

interface CaracteristiquesSecondaires {
  ret_pa?: number;
  re_pa?: number;
  ret_pme?: number;
  re_pme?: number;
  so?: number;
  tac?: number;
  fui?: number;
  ini?: number;
  inv?: number;
  prospe?: number;
  pod?: number;
}

interface Dommages {
  do?: number;
  do_cri?: number;
  do_neutre?: number;
  do_terre?: number;
  do_feu?: number;
  do_eau?: number;
  do_air?: number;
  do_ren?: number;
  do_pi?: number;
  per_pi?: number;
  do_pou?: number;
  do_per_so?: number;
  do_per_ar?: number;
  do_per_di?: number;
  do_per_me?: number;
}

interface Resistances {
  re_neutre?: number;
  re_per_neutre?: number;
  re_terre?: number;
  re_per_terre?: number;
  re_feu?: number;
  re_per_feu?: number;
  re_eau?: number;
  re_per_eau?: number;
  re_air?: number;
  re_per_air?: number;
  re_cri?: number;
  re_pou?: number;
  re_per_dis?: number;
  re_per_me?: number;
}

@Schema()
export class equipement {
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
}

export const equipementSchema = SchemaFactory.createForClass(equipement);
