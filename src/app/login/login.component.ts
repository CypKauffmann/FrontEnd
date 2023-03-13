import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationRequest } from '../models/authentification-request';
import { personneService } from '../services/personne.service';
import { utilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username!:string ;
  password!:string ;

  constructor(private pService:personneService, private router:Router, private http:HttpClient,
    private utService:utilisateurService)
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

        this.utService.getByUsername(this.username).subscribe(
          response=>
          {
            sessionStorage.setItem("user", JSON.stringify(response));
          }
        );
        
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

}