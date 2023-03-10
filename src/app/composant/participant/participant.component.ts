import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { Paiement } from 'src/app/models/paiement';
import { Participant } from 'src/app/models/participant';
import { ParticipantService } from 'src/app/services/participant.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit{

  constructor(private route: ActivatedRoute,private partService:ParticipantService,private router:Router)
    
  {

  }

  //déclaration

  participants!:Participant[];
  participant!:Participant;
  formations!:Formation[] ;
  paiements!:Paiement[] ;

  ngOnInit(): void {
    this.participant= new Participant();
    this.AfficherAll();
  }

  AfficherAll()
  {
    this.partService.getAll().subscribe(
      res=>this.participants=res
    )
  }

  supprimer(id:number)
  {
    this.partService.delete(id).subscribe(
      res=>this.AfficherAll()
    )
  }

  modifier(id:number)
  {
    this.partService.getById(id).subscribe(
      res=>this.participant=res
    )
  }


}
