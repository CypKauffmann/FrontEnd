import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezVous } from 'src/app/models/rendez-vous';
import { RendezvousService } from 'src/app/services/rendezvous.service';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {

  constructor(private rdvservice:RendezvousService,
    private router:Router, private route:ActivatedRoute)
  {

  }

  rendezvous!:RendezVous[] ;
  rdv!:RendezVous ;


  ngOnInit(): void {

    this.rdv = new RendezVous ;

    this.rdvservice.getAll().subscribe(
      response => this.rendezvous=response
    );
    
  }



}
