import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import { utilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor(private utservice:utilisateurService, 
    private http:HttpClient,
    private router:Router)
  {

  }

  ut!:Utilisateur ;

  ngOnInit(): void 
  {
    this.ut = new Utilisateur ;
  }

  inscription()
  {
    console.log(this.ut)
    
    this.utservice.add(this.ut).subscribe(
      response=> 
      {
        console.log("bonjour après ajout")
        this.router.navigateByUrl("Connexion")
        this.ut = new Utilisateur
      }
    );
  }

}
