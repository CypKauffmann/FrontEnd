import { Formation } from "./formation";
import { Utilisateur } from "./utilisateur";

export class Formateur extends Utilisateur {

    formations!:Formation[] ;


    constructor(formations?:Formation[])
    {
<<<<<<< HEAD
        super()
=======
        super();
>>>>>>> main
        if(formations)
        this.formations = formations
    }
}
