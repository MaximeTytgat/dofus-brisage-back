import { CreateEquipementDto } from '../../../equipement/dto/create-equipement.dto';

export const newEquipement: CreateEquipementDto = {
  name: '[Equipement1]',
  pourcentage_brisage: 55,
};

export const equipementArray: CreateEquipementDto[] = [
  {
    name: '[Equipement1]',
    pourcentage_brisage: 55,
  },
  {
    name: '[Equipement2]',
    pourcentage_brisage: 90,
  },
  {
    name: '[Equipement3]',
    pourcentage_brisage: 66,
  },
];
