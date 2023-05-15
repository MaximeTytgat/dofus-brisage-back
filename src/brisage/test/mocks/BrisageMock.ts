import { CreateBrisageDto } from 'src/brisage/dto/create-brisage.dto';
import { CreateEquipementDto } from 'src/equipement/dto/create-equipement.dto';
import { Brisage } from 'src/brisage/schemas/brisage.schema';

export const newEquipement: CreateEquipementDto = {
  name: '[Equipement]',
  pourcentage_brisage: 80,
};

export const arrayBrisage: Brisage[] = [
  {
    equipement: { name: '[Equipement1]' },
    pourcentage_brisage: 45,
    coup_totale: 14000,
    resultat: 17000,
  },
  {
    equipement: { name: '[Equipement2]' },
    pourcentage_brisage: 66,
    coup_totale: 18000,
    resultat: 16000,
  },
  {
    equipement: { name: '[Equipement3]' },
    pourcentage_brisage: 90,
    coup_totale: 15000,
    resultat: 20000,
  },
];

export const newBrisage: CreateBrisageDto = {
  equipement: { name: '[Equipement]', pourcentage_brisage: 80 },
  pourcentage_brisage: 80,
  coup_totale: 150000,
  resultat: 90000,
};
