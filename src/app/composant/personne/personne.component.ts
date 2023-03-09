import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/models/personne';
import { personneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
  export class PersonneComponent implements OnInit{

    constructor(private route: ActivatedRoute,private pservice:personneService,private router:Router)
    {

    }
    // déclaration des variables
    personnes!:Personne[];

    personne!:Personne;

    ngOnInit(): void {
      this.personne= new Personne();

      this.afficherAll();
     
    }

    afficherAll()
    {
      this.pservice.getAll().subscribe(
        response=>this.personnes=response
      )
    }


  ajouter(f:NgForm)
  {
    this.pservice.add(this.personne).subscribe(
      response=>  this.afficherAll()
    );
  }


 supprimer(id:number)
 {
  this.pservice.delete(id).subscribe(
    response=>  this.afficherAll()

  );
 }

 modifier(id:number)
 {
  this.pservice.getById(id).subscribe(
    response=>this.personne=response
  )
 }
 
}

