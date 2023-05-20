import { IsNotEmpty, ValidateNested } from 'class-validator';

export class CreateEffectDto {
  @ValidateNested()
  @IsNotEmpty()
  readonly dofusdb_id: string;
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  readonly rune_name: string;
  @IsNotEmpty()
  readonly density: string;
  @IsNotEmpty()
  readonly element: string;
  @IsNotEmpty()
  readonly categorie: string;
  readonly img?: string;
  readonly rune_img?: string;
}
