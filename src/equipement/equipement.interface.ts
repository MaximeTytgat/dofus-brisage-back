import { Ressource } from 'src/ressource/schemas/ressource.schema';

export interface CaracteristiquesPrimaires {
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

export interface CaracteristiquesSecondaires {
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

export interface Dommages {
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

export interface Resistances {
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

export interface RessourceNumber {
  ressource: Ressource;
  nombre: number;
}

export interface Equipement {
  name: string;
  pourcentage_brisage?: number;
  caracteristiques_primaires?: CaracteristiquesPrimaires;
  caracteristiques_secondaires?: CaracteristiquesSecondaires;
  dommages?: Dommages;
  resistances?: Resistances;
  craft: RessourceNumber[];
}
