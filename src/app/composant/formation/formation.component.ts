import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { Paiement } from 'src/app/models/paiement';
import { formationService } from 'src/app/services/formation.service'; 
import { PaiementService } from 'src/app/services/paiement.service';

import { Formation } from '../../models/formation';
import { Paiement } from '../../models/paiement';
import { formationService } from '../../services/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit{
 
 

  constructor(private formationService:formationService,private router:Router,private paiementService: PaiementService)

  {

  }

  montantTot= 0;
  aRembourser= 0;
  dejaRegler: number= 0;

  formation !:Formation;
  formations!:Formation[];
  paiements!:Paiement[];
  paiement!:Paiement;
  montantTotalFormation!: number;
  idFormation!:number
  montantChoisi: number = 0;
  typePaiementChoisi: string = 'une fois';
  montantAPayer!: number

 

  ngOnInit(): void {

    this.formation=new Formation();
    this.afficherAll();
  
   
  }
  afficherAll() {
    this.formationService.getAll().subscribe((response) => {
      this.formations = response;
      for (let form of this.formations) {
        this.formationService.getPaiementsByFormationId(form.idForm).subscribe((response) => {
          form.paiements = response;
        });
      }
    });
  }


  validerPaiement() {
    if (this.montantChoisi > 0) {
      // Créer un nouvel objet Paiement avec les valeurs choisies par l'utilisateur
      let nouveauPaiement = new Paiement();
      nouveauPaiement.datePaiement = new Date();
      nouveauPaiement.montantTot = this.montantChoisi;
      nouveauPaiement.typePaiement = this.typePaiementChoisi;
  
      // Ajouter le nouveau paiement à la formation
      this.formation.paiements.push(nouveauPaiement);
  
      // Mettre à jour le montant déjà réglé et le montant à rembourser
      let montantDejaPaye = this.formation.paiements.reduce((total, paiement) => total + paiement.montantTot, 0);
      let montantRestant = this.formation.prix - montantDejaPaye;
      this.formation.paiements.forEach(paiement => {
        paiement.dejaRegler = paiement.montantTot;
        paiement.aRembourser = 0;
      });
      if (this.typePaiementChoisi === 'deux fois') {
        let montantPremierPaiement = Math.round(this.montantChoisi / 2);
        this.formation.paiements[0].dejaRegler = montantPremierPaiement;
        this.formation.paiements[0].aRembourser = this.formation.paiements[0].montantTot - montantPremierPaiement;
      } 
      else if (this.typePaiementChoisi === 'trois fois') {
        let montantPremierPaiement = Math.round(this.montantChoisi / 3);
        let montantDeuxiemePaiement = Math.round((this.montantChoisi - montantPremierPaiement) / 2);
        this.formation.paiements[0].dejaRegler = montantPremierPaiement;
        this.formation.paiements[0].aRembourser = this.formation.paiements[0].montantTot - montantPremierPaiement;
        let nouveauPaiement2 = new Paiement();
        nouveauPaiement2.datePaiement = new Date();
        nouveauPaiement2.montantTot = montantDeuxiemePaiement;
        nouveauPaiement2.typePaiement = 'deuxième paiement';
        this.formation.paiements.push(nouveauPaiement2);
        let nouveauPaiement3 = new Paiement();
        nouveauPaiement3.datePaiement = new Date();
        nouveauPaiement3.montantTot = this.montantChoisi - montantPremierPaiement - montantDeuxiemePaiement;
        nouveauPaiement3.typePaiement = 'troisième paiement';
        this.formation.paiements.push(nouveauPaiement3);
      }
    }
  }
  
  payer(id: number, prix: number) {
    this.montantTotalFormation = prix;
    this.idFormation = id;
    this.typePaiementChoisi = 'une fois';
    this.dejaRegler = 0;
    this.aRembourser = prix;
  }
  

}
