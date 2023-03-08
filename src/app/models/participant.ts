import { Formation } from "./formation";
import { Paiement } from "./paiement";
import { Utilisateur } from "./utilisateur";

export class Participant extends Utilisateur {

    formations!:Formation[] ;
    paiements!:Paiement[] ;

    constructor(formations?:Formation[], paiements?:Paiement[])
    {
        super()
        if(formations)
        this.formations = formations
        if(paiements)
        this.paiements = paiements
    }
}
