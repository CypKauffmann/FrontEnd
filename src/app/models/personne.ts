import { Historique } from "./historique";
import { RendezVous } from "./rendez-vous";

export class Personne {

    idPers!:number ;
    nomPers!:string ;
    prenomPers!:string ;
    age!:number ;
    email!:string ;
    tel!:string ;

    rendezVous!:RendezVous[] ;
    historiques!:Historique[] ;


    constructor(idPers?:number, nomPers?:string, prenomPers?:string, 
        age?:number, email?:string, tel?:string,
        rendezVous?:RendezVous[], historiques?:Historique[])
        {
            if(idPers)
            this.idPers = idPers
            if(nomPers)
            this.nomPers = nomPers
            if(prenomPers)
            this.prenomPers = prenomPers
            if(age)
            this.age = age
            if(email)
            this.email = email
            if(tel)
            this.tel = tel 
            if(rendezVous)
            this.rendezVous = rendezVous
            if(historiques)
            this.historiques = historiques
        }

}
