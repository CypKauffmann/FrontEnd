import { Formation } from "./formation";
import { Utilisateur } from "./utilisateur";

export class Formateur extends Utilisateur {

    formations!:Formation[] ;


    constructor(formations?:Formation[])
    {
        super()
        if(formations)
        this.formations = formations
    }
    
}
