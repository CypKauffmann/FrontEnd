import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Historique } from 'src/app/models/historique';
import { Personne } from 'src/app/models/personne';
import { RendezVous } from 'src/app/models/rendez-vous';
import { Utilisateur } from 'src/app/models/utilisateur';
import { HistoriqueService } from 'src/app/services/historique.service';
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
    private utservice:utilisateurService, private historiqueservice:HistoriqueService,
    private router:Router, private route:ActivatedRoute,
    private elRef: ElementRef)
  {

  }

  //initialiser les rdv
  rendezvous!:RendezVous[] ;
  rdv!:RendezVous ;

  //initialiser les historiques
  historiques!:Historique[] ;
  hist!:Historique ;

  //initialiser les personnes et récupéréer les propsects
  prospects!:Personne[] ;
  prospect!:Personne ;
  idProspect!:number ;
  idProspectHIST!:number ;

  prospectAjoutRdv!:Personne ;
  prospectAjoutHist!:Personne ;

  personnes!:Personne[] ;

  //initialiser les utilisateurs
  utilisateurs!:Utilisateur[] ;

  //variable pour ancre de prospect vers rdv
  highlight = false;
  highlight2 = false ;
  highlight3 = false ;


  ngOnInit(): void {

    //tous les rdv
    this.afficherAllRdv() ;
    this.rdv = new RendezVous ;
    
    //tous les prospects
    this.afficherAllProspect() ;
    this.prospect = new Personne ;
    this.prospectAjoutRdv = new Personne ;
    this.prospectAjoutHist = new Personne ;

    //tous les historiques
    this.afficherAllHist() ;
    this.hist = new Historique ;

    // this.persservice.getById(this.idProspect).subscribe(
    //   response=> this.prospect=response
    // );
    
  }

  ////////////////////////////////////////Rendez vous//////////////////////////////////////////////
  
  //afficher les rdv
  afficherAllRdv()
  {
    this.rdvservice.getAll().subscribe(
      response => 
      {
        this.rendezvous = this.sortObjectsByDateTime(response)
      }
    );
  }

  //trier par date et heures les rdv
  sortObjectsByDateTime(list: RendezVous[]): RendezVous[] {
    return list.sort((a, b) => {
      const dateA = Date.parse(a.dateRdv as unknown as string);
      const dateB = Date.parse(b.dateRdv as unknown as string);
      return dateA - dateB;
    });
  }

  //ajout rdv (à modifier quand on aura fait la connexion pour affilier le commercial aux rdv ajoutés)
  ajoutRdv()
  {
    this.persservice.getById(this.idProspect).subscribe(
      response=>
      {
        this.prospect=response
        this.rdv.personne = this.prospect

        this.rdvservice.add(this.rdv).subscribe(
          response=> 
          {
            this.afficherAllRdv()
            this.afficherAllProspect()
            this.afficherAllHist()
          }
        )
        this.rdv = new RendezVous
        this.highlight=false
      }
    );
    
  }

  //supprimer un rdv
  supprimerRdv(id:number)
  {
    this.rdvservice.delete(id).subscribe(
      response=> 
      {
        this.afficherAllRdv()
        this.afficherAllProspect()
        this.afficherAllHist()
      }
    );
  }

  //modifier un rdv
  modifierRdv(id:number)
  {
    this.rdvservice.getById(id).subscribe(
      response=> 
      {
        this.rdv=response
        this.ancreajoutRdv(this.rdv.personne.idPers)
      }
    );
  }


  ancreajoutRdv(id:number)
  {
    this.persservice.getById(id).subscribe(
      response=>
      {
        this.prospectAjoutRdv=response
      }
    );
    const anchor = this.elRef.nativeElement.querySelector('#ajoutRdv');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.highlight = !this.highlight;
    }
  }



  ////////////////////////////////////////Prospect//////////////////////////////////////////////

  //aficher les prospect
  afficherAllProspect()
  {
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
  }

  //ajout d'un prospect
  ajoutProspect()
  {
    this.persservice.add(this.prospect).subscribe(
      response=>
      {
        this.afficherAllRdv()
        this.afficherAllProspect()
        this.afficherAllHist()
      }
    );
    this.prospect = new Personne
    this.highlight3=false
  }

  supprimerPropsect(id:number)
  {
    this.persservice.delete(id).subscribe(
      response=> 
      {
        this.afficherAllRdv()
        this.afficherAllProspect()
        this.afficherAllHist()
      }
    );
  }

  modifierProspect(id:number)
  {
    this.persservice.getById(id).subscribe(
      response=> 
      {
        this.ancreajoutProsp()
        this.prospect=response
      }
    );
  }

  ancreajoutProsp()
  {
    // this.persservice.getById(id).subscribe(
    //   response=>
    //   {
    //     this.prospectAjoutRdv=response
    //   }
    // );
    const anchor = this.elRef.nativeElement.querySelector('#ajoutProsp');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.highlight3 = !this.highlight3;
    }
  }





  ////////////////////////////////////////Historique//////////////////////////////////////////////

  //affichage
  afficherAllHist()
  {
    this.historiqueservice.getAll().subscribe(
      response => 
      {
        this.historiques = response
      }
    );
  }

  //ajout historique et suppresion du rdv associé (affilier le commercial connecté)
  ajoutHist()
  {
    this.persservice.getById(this.idProspectHIST).subscribe(
      response=>
      {
        console.log(response)
        this.prospect=response
        this.hist.personne = this.prospect
        console.log(this.hist)
        this.historiqueservice.add(this.hist).subscribe(
          response=> 
          {
            console.log(this.rdv)
            if(this.rdv.idRdv != null)
            {
              console.log('bonjour')
              this.rdvservice.delete(this.rdv.idRdv).subscribe(
                response=>
                {
                  this.afficherAllRdv()
                  this.afficherAllProspect()
                  this.afficherAllHist()
                }
              );
            }
            this.afficherAllRdv()
            this.afficherAllProspect()
            this.afficherAllHist()
          }
        )
        this.highlight2=false
        this.hist = new Historique
      }
    );
  }

  //modifier un historique
  modifierHist(id:number)
  {
    this.historiqueservice.getById(id).subscribe(
      response=> 
      {
        this.hist=response
        this.ancreajoutHist(0, this.hist.personne.idPers)
      }
    );
  }

  //ancre de validation d'un historique
  ancreajoutHist(idrdv:number, idpers:number)
  {
    this.persservice.getById(idpers).subscribe(
      response=>
      {
        this.prospectAjoutHist=response
        this.rdvservice.getById(idrdv).subscribe(
          response=>
          {
            this.rdv = response
            this.hist.dateHist = response.dateRdv
            this.hist.personne = response.personne

            // console.log("date hist : "+this.hist.dateHist)
            // console.log("personne hist : "+this.hist.personne.nomPers)
            // console.log("date rdv : "+response.dateRdv)
            // console.log("personne rdv : "+response.personne.nomPers)
          }
        );
      }
    );
    const anchor = this.elRef.nativeElement.querySelector('#ajoutHist');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.highlight2 = !this.highlight2;
    }
  }


}
