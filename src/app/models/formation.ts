import { Formateur } from "./formateur";
import { Paiement } from "./paiement";
import { Participant } from "./participant";

export class Formation {

    idForm!:number ;
    nomForm!:string ;
    dateDebut!:Date ;
    dateFin!: Date ;
    prix!:number ;
    duree!:number ;

    formateurs!:Formateur[] ;
    participants!:Participant[] ;
    paiements!:Paiement[] ;


    constructor(idForm?:number, nomForm?:string, dateDebut?:Date, dateFin?:Date,
        prix?:number, duree?:number,
        formateurs?:Formateur[], participants?:Participant[], paiements?:Paiement[])
    {
        if(idForm)
        this.idForm = idForm
        if(nomForm)
        this.nomForm = nomForm
        if(dateDebut)
        this.dateDebut = dateDebut
        if(dateFin)
        this.dateFin = dateFin
        if(prix)
        this.prix = prix
        if(duree)
        this.duree = duree 
        if(formateurs)
        this.formateurs = formateurs
        if(participants)
        this.participants = participants
        if(paiements)
        this.paiements = paiements
    }
}
