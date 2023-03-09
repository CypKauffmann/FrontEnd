import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';
import { Formation } from 'src/app/models/formation';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit{

  constructor(private route: ActivatedRoute,private formateurService:FormateurService,private router:Router)
    
  {

  }

  // déclaration variables
  formateur!:Formateur;
  formateurs!:Formateur[];
  formations!:Formation[] ;


  ngOnInit(): void {

  }

  
  afficherAll()
  {
    this.formateurService.getAll().subscribe(
      response=>this.formateurs=response
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

}
