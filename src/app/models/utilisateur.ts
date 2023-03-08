import { Role } from "./role";

export class Utilisateur {

    username!:string ;
    password!:string ;

    role!:Role ;


    constructor(username?:string, password?:string, role?:Role)
    {
        if(username)
        this.username = username
        if(password)
        this.password = password
        if(role)
        this.role = role
    }
}
