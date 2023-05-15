import { Equipement } from '../equipement/schemas/equipement.schema';

export interface Brisage {
  equipement: Equipement;
  pourcentage_brisage: number;
  coup_totale: number;
  resultat: number;
}
