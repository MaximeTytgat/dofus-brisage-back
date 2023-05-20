import { IsNotEmpty } from 'class-validator';
import { RessourceNumber } from '../equipement.interface';
import { Effects } from 'src/effects/schemas/effects.schema';

export class CreateEquipementDto {
  @IsNotEmpty()
  readonly name: string;
  readonly pourcentage_brisage?: number;
  readonly craft?: RessourceNumber[];
}

export class SearchEquipementDto {
  readonly name: string;
  readonly pourcentage_brisage?: number;
  readonly craft?: RessourceNumber[];
}
