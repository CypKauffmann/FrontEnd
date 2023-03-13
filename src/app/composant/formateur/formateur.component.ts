import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';
import { Personne } from 'src/app/models/personne';
import { Utilisateur } from 'src/app/models/utilisateur';
import { FormateurService } from 'src/app/services/formateur.service';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit{

  constructor(private route: ActivatedRoute,private formateurService:FormateurService,private router:Router, partService:ParticipantService)
    
  {

  }

    // déclaration variables
   
    formateur!:Formateur; // TODO: Inject the current formateur
    formateurs!:Formateur[];
    formations!:Formation[];
    participants!:Participant[];
    participant!:Participant;

  ngOnInit(): void {
    this.formateur= new Formateur();
    
    this.afficherAll();

  }

  afficherAll()
  {
    this.formateurService.getAll().subscribe(
      response=>
      {
        this.formateurs=response
        for(let form of this.formateurs)
        {
          for(let f of form.formations)
        {
          this.formateurService.getParticipants(f.idForm).subscribe(
            response=>f.participants=response
          )
        }
        }
        
      }
    )
  }
  
  ajouter(f:NgForm)
  {
    this.formateurService.add(this.formateur).subscribe(
      response=>  this.afficherAll()
    );
  }

  
 supprimer(id:number)
 {
  this.formateurService.delete(id).subscribe(
    response=>  this.afficherAll()

  );
 }

 modifier(id:number)
 {
  this.formateurService.getById(id).subscribe(
    response=>this.formateur=response
  )
 }
  /*
  AfficherParticipants() 
  {
    this.formateurService.getParticipants()
      .subscribe(
        formations => 
        {
          this.formations = formations
          for(let f of this.formations)
          {
            this.formateurService.getParticipants(f.idForm).subscribe(
              response=>f.participants=response
            )
          }
        });
  }*/

}
