import { Historique } from "./historique";
import { RendezVous } from "./rendez-vous";

export class Commercial {

    rendezVous!:RendezVous[] ;
    historiques!:Historique[] ;

    constructor(rendezVous?:RendezVous[], historiques?:Historique[])
    {
        if(rendezVous)
        this.rendezVous = rendezVous
        if(historiques)
        this.historiques = historiques
    }

}
