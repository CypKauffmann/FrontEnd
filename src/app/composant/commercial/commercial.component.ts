import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/models/personne';
import { RendezVous } from 'src/app/models/rendez-vous';
import { Utilisateur } from 'src/app/models/utilisateur';
import { personneService } from 'src/app/services/personne.service';
import { RendezvousService } from 'src/app/services/rendezvous.service';
import { utilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css'],
  providers: [DatePipe]
})
export class CommercialComponent implements OnInit {

  constructor(private rdvservice:RendezvousService, private persservice:personneService,
    private utservice:utilisateurService,
    private router:Router, private route:ActivatedRoute)
  {

  }


  rendezvous!:RendezVous[] ;
  rdv!:RendezVous ;

  prospects!:Personne[] ;
  prospect!:Personne ;
  idProspect!:number ;

  personnes!:Personne[] ;

  utilisateurs!:Utilisateur[] ;


  ngOnInit(): void {

    //tous les rdv
    this.afficherAllRdv() ;

    this.rdv = new RendezVous ;
    
    //liste prospects
    this.persservice.getAll().subscribe(
      response=>  
      {
        this.personnes=response

        this.utservice.getAll().subscribe(
          response => 
          {
            this.utilisateurs = response

            this.prospects = this.personnes?.filter((personne) => {
              return !this.utilisateurs.some((p) => p.idPers === personne.idPers)
            });
          }
        )
      }
    );

    // this.persservice.getById(this.idProspect).subscribe(
    //   response=> this.prospect=response
    // );
    
  }



  afficherAllRdv()
  {
    this.rdvservice.getAll().subscribe(
      response => 
      {
        this.rendezvous = this.sortObjectsByDateTime(response)
      }
    );
  }

  sortObjectsByDateTime(list: RendezVous[]): RendezVous[] {
    return list.sort((a, b) => {
      const dateA = Date.parse(a.dateRdv as unknown as string);
      const dateB = Date.parse(b.dateRdv as unknown as string);
      return dateA - dateB;
    });
  }

  ajoutRdv()
  {
    this.persservice.getById(this.idProspect).subscribe(
      response=>
      {
        this.prospect=response
        this.rdv.personne = this.prospect

        this.rdvservice.add(this.rdv).subscribe(
          response=> this.afficherAllRdv()
        )
        this.rdv = new RendezVous
      }
    );
    
  }


  supprimerRdv(id:number)
  {
    this.rdvservice.delete(id).subscribe(
      response=> this.afficherAllRdv()
    );
  }


  modifierRdv(id:number)
  {
    this.rdvservice.getById(id).subscribe(
      response=> 
      {
        this.rdv=response
      }
    );
  }


}
