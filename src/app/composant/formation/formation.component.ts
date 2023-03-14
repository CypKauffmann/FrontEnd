import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { Paiement } from 'src/app/models/paiement';
import { formationService } from 'src/app/services/formation.service'; 
import { PaiementService } from 'src/app/services/paiement.service';

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

  voirFormation(id: number) {
    this.router.navigate(['/formations', id]);
  }
  

 /* payer(): void {
    if (this.montantChoisi > 0 && this.typePaiementChoisi) {
      this.validerPaiement();
  
      // Appeler la méthode validerPaiement() du service de paiement
      this.paiementService.validerPaiement(this.formation.idForm, this.formation.paiements[this.formation.paiements.length - 1])
        .subscribe(
          () => {
            console.log("Paiement validé !");
          },
          (error) => {
            console.log("Une erreur est survenue lors de la validation du paiement :", error);
          }
        );
    }
  }*/

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
  
  /*validerPaiement() {
    const paiement = {
      datePaiement: new Date(),
      typePaiement: this.typePaiementChoisi,
      montantTot: this.montantTotalFormation,
      dejaRegler: this.dejaRegler,
      aRembourser: this.aRembourser
    };
    const formation = this.formations.find(f => f.idForm === this.idFormation);
    this.formation.paiements.push(this.paiement);
    this.formation.prix -= this.dejaRegler;
    this.typePaiementChoisi = 'une fois';
    this.dejaRegler = 0;
    this.aRembourser = 0;
  }*/
  annulerPaiement() {
    // Réinitialiser les valeurs des champs du formulaire
    this.montantAPayer = 0;
    this.typePaiementChoisi = "une fois";
  }
  
}
