import { Historique } from "./historique";
import { RendezVous } from "./rendez-vous";
import { Utilisateur } from "./utilisateur";

export class Commercial extends Utilisateur {

    rendezVousC!:RendezVous[] ;
    historiquesC!:Historique[] ;

    constructor(rendezVous?:RendezVous[], historiques?:Historique[])
    {
<<<<<<< HEAD
        super()
=======
        super();
>>>>>>> main
        if(rendezVous)
        this.rendezVousC = rendezVous
        if(historiques)
        this.historiquesC = historiques
    }

}
