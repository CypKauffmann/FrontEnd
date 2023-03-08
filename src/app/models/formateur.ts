import { Formation } from "./formation";

export class Formateur {

    formations!:Formation[] ;


    constructor(formations?:Formation[])
    {
        if(formations)
        this.formations = formations
    }
}
