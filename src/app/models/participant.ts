import { Formation } from "./formation";
import { Paiement } from "./paiement";

export class Participant {

    formations!:Formation[] ;
    paiements!:Paiement[] ;

    constructor(formations?:Formation[], paiements?:Paiement[])
    {
        if(formations)
        this.formations = formations
        if(paiements)
        this.paiements = paiements
    }
}
