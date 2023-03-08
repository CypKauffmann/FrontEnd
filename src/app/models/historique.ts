import { Commercial } from "./commercial";
import { Personne } from "./personne";

export class Historique {

    idHist!:number ;
    dateHist!:Date ;
    commentaire!:string ;

    personne!:Personne ;
    commercial!:Commercial ;


    constructor(idHist?:number, dateHist?:Date, commentaire?:string, 
        personne?:Personne, commercial?:Commercial)
    {
        if(idHist)
        this.idHist = idHist
        if(dateHist)
        this.dateHist = dateHist
        if(commentaire)
        this.commentaire = commentaire
        if(personne)
        this.personne = personne
        if(commercial)
        this.commercial = commercial
    }

}
