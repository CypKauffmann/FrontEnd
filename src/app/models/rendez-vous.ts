import { Commercial } from "./commercial";
import { Personne } from "./personne";

export class RendezVous {

    idRdv!:number ;
    dateRdv!:Date ;

    personne!:Personne ;
    commercial!:Commercial ;

    constructor(idRdv?:number, dateRdv?:Date, personne?:Personne, commercial?:Commercial)
    {
        if(idRdv)
        this.idRdv = idRdv
        if(dateRdv)
        this.dateRdv = dateRdv
        if(personne)
        this.personne = personne
        if(commercial)
        this.commercial = commercial
    }


}
