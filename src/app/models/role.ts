import { Utilisateur } from "./utilisateur";

export class Role {

    idRole!:number ;
    nomRole!:string ;

    utilisateurs!:Utilisateur[] ;


    constructor(idRole?:number, nomRole?:string, utilisateurs?:Utilisateur[])
    {
        if(idRole)
        this.idRole = idRole
        if(nomRole)
        this.nomRole = nomRole
        if(utilisateurs)
        this.utilisateurs = utilisateurs
    }
}
