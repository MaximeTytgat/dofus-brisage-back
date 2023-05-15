import { IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateEquipementDto } from 'src/equipement/dto/create-equipement.dto';

export class CreateBrisageDto {
  @ValidateNested()
  @IsNotEmpty()
  equipement: CreateEquipementDto;

  @IsNotEmpty()
  readonly pourcentage_brisage?: number;
  readonly coup_totale?: number;
  readonly resultat?: number;
}
