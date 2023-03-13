import { Formation } from "./formation";
import { Participant } from "./participant";

export class Paiement {

    idPaie!:number ;
    aRembourser!:number ;
    dejaRegler!:number ;
    montantTot!:number ;
    typePaiement!:string ;
    datePaiement!:Date ;

    formations!:Formation[] ;
    participant!:Participant ;


    constructor(idPaie?:number, aRembourser?:number, dejaRegler?:number, montantTot?:number,
        typePaiement?:string, datePaiement?:Date,
        formations?:Formation[], participant?:Participant)
        {
            if(idPaie)
            this.idPaie = idPaie
            if(aRembourser)
            this.aRembourser = aRembourser
            if(dejaRegler)
            this.dejaRegler = dejaRegler
            if(montantTot)
            this.montantTot = montantTot
            if(typePaiement)
            this.typePaiement = typePaiement
            if(datePaiement)
            this.datePaiement = datePaiement
            if(formations)
            this.formations = formations
            if(participant)
            this.participant = participant
        }
}
