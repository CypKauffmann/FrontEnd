import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { personneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css']
})
export class EnteteComponent implements OnInit {

  constructor(private router:Router, private pservice:personneService)
  {

  }

   ut!:Utilisateur ;
   deconnexion!:boolean;

  ngOnInit(): void {

    this.deconnexion=false;
    let sessionUser=sessionStorage.getItem("user");

     this.ut = sessionUser!==null ? JSON.parse(sessionUser) : null;
     if(this.ut)
     {
      // console.log('true')
      this.deconnexion=true;
      
     }
     else
     {
      // console.log('false')
      this.deconnexion=false;
     }

    //  console.log(this.ut.nomPers);
    
  }

  deconnect()
  {
    this.deconnexion=false;
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    
    this.router.navigateByUrl("Connexion")
    //window.location.reload();
    
  }


}
