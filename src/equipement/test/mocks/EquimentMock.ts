import { CreateEquipementDto } from '../../../equipement/dto/create-equipement.dto';

export const newEquipement: CreateEquipementDto = {
  name: '[Equipement1]',
  pourcentage_brisage: 55,
  caracteristiques_primaires: {
    vi: 300,
    fo: 35,
  },
  caracteristiques_secondaires: {
    ret_pa: 1,
  },
};

export const equipementArray: CreateEquipementDto[] = [
  {
    name: '[Equipement1]',
    pourcentage_brisage: 55,
    caracteristiques_primaires: {
      vi: 300,
      fo: 35,
    },
    caracteristiques_secondaires: {
      ret_pa: 1,
    },
  },
  {
    name: '[Equipement2]',
    pourcentage_brisage: 90,
    caracteristiques_primaires: {
      vi: 110,
      age: 35,
    },
    dommages: {
      do_air: 8,
    },
  },
  {
    name: '[Equipement3]',
    pourcentage_brisage: 66,
    caracteristiques_primaires: {
      vi: 110,
      age: 35,
    },
    resistances: {
      re_terre: 7,
      re_per_terre: 7,
      re_feu: 7,
    },
  },
];
