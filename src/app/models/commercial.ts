import { Historique } from "./historique";
import { RendezVous } from "./rendez-vous";
import { Utilisateur } from "./utilisateur";

export class Commercial extends Utilisateur{

    rendezVousCommercial!:RendezVous[] ;
    historiquesCommercial!:Historique[] ;

    constructor(rendezVous?:RendezVous[], historiques?:Historique[])
    {
        super()
        if(rendezVous)
        this.rendezVous = rendezVous
        if(historiques)
        this.historiques = historiques
    }

}
