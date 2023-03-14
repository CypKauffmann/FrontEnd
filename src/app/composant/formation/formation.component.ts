import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ParticipantService } from 'src/app/services/participant.service';
import { Formation } from '../../models/formation';
import { Paiement } from '../../models/paiement';
import { formationService } from '../../services/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
})
export class FormationComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formationService: formationService,
    private router: Router,
    private participantService: ParticipantService
  ) {}

  formation!: Formation;
  formations!: Formation[];
  paiements!: Paiement[];
  ut!: Utilisateur;

  ngOnInit(): void {
    this.formation = new Formation();
    this.afficherAll();
    let sessionUser=sessionStorage.getItem("user");
    this.ut = sessionUser!==null ? JSON.parse(sessionUser) : null;



    
  }
  afficherAll() {
    this.formationService.getAll().subscribe((response) => {
      this.formations = response;
      for (let form of this.formations) {
        this.formationService
          .getPaiementsByFormationId(form.idForm)
          .subscribe((response) => {
            form.paiements = response;
          });
      }
    });
  }

  voirFormation(id: number) {
    this.router.navigate(['/formations', id]);
  }

  addParticipantAndRedirectToPayment(
    idFormation: number,
    idParticipant: number
  ) {
    this.participantService
      .addParticipantToFormation(idFormation, idParticipant)
      .subscribe(() => {
        // Rediriger vers le formulaire de paiement
        this.router.navigate(['/PaForm'], {
          queryParams: { idFormation },
        });
      });
  }



  




}
