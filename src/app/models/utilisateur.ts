import { Personne } from "./personne";
import { Role } from "./role";

<<<<<<< HEAD
export class Utilisateur extends Personne{
=======
export class Utilisateur extends Personne {
>>>>>>> main

    username!:string ;
    password!:string ;

    role!:Role ;


    constructor(username?:string, password?:string, role?:Role)
    {
<<<<<<< HEAD
        super()
=======
<<<<<<< HEAD
        super()
=======
        super();
>>>>>>> main
>>>>>>> main
        if(username)
        this.username = username
        if(password)
        this.password = password
        if(role)
        this.role = role
    }
}
