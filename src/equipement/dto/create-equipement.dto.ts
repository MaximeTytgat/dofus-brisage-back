import { IsNotEmpty } from 'class-validator';
import {
  CaracteristiquesPrimaires,
  CaracteristiquesSecondaires,
  Dommages,
  Resistances,
  RessourceNumber,
} from '../equipement.interface';

export class CreateEquipementDto {
  @IsNotEmpty()
  readonly name: string;
  readonly pourcentage_brisage?: number;
  readonly caracteristiques_primaires?: CaracteristiquesPrimaires;
  readonly caracteristiques_secondaires?: CaracteristiquesSecondaires;
  readonly dommages?: Dommages;
  readonly resistances?: Resistances;
  readonly craft?: RessourceNumber[];
}

export class SearchEquipementDto {
  readonly name: string;
  readonly pourcentage_brisage?: number;
  readonly caracteristiques_primaires?: CaracteristiquesPrimaires;
  readonly caracteristiques_secondaires?: CaracteristiquesSecondaires;
  readonly dommages?: Dommages;
  readonly resistances?: Resistances;
  readonly craft?: RessourceNumber[];
}
