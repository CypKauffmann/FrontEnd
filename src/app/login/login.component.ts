<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationRequest } from '../models/authentification-request';
import { utilisateurService } from '../services/utilisateur.service';
=======
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationRequest } from '../models/authentification-request';
import { personneService } from '../services/personne.service';
>>>>>>> main

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
<<<<<<< HEAD
export class LoginComponent  {
  
  
  
 
=======
export class LoginComponent implements OnInit {
  
  username!:string ;
  password!:string ;

  constructor(private pService:personneService, private router:Router, private http:HttpClient)
  {

  }
  
  ngOnInit(): void {

    this.username = "";
    this.password = "";
    
  }


  demandeAuth()
  {
    let authRequest:AuthentificationRequest = new AuthentificationRequest(this.username, this.password)
    this.pService.authentification(authRequest).subscribe(
      response=> 
      {
        console.log("Authentification ok")
        console.log(response.jwt)

        sessionStorage.setItem("token", 'Bearer ' + response.jwt)
        this.router.navigateByUrl("pageAccueil")
      },
      erreur=> 
      {
        console.log("Authentification non ok")
        this.username = "" ;
        this.password = "" ;
      }
    );
  }
>>>>>>> main

}