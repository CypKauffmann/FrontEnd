import { Component } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';
import { FormateurService } from 'src/app/services/formateur.service';
import { formationService } from 'src/app/services/formation.service';
import { ParticipantService } from 'src/app/services/participant.service';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/models/formateur';

@Component({
  selector: 'app-gestion-formateur',
  templateUrl: './gestion-formateur.component.html',
  styleUrls: ['./gestion-formateur.component.css'],
})
export class GestionFormateurComponent {
  formateurs: Formateur[] = [];
  selectedFormationIds3: number[] = []; // Déclarer selectedFormationIds3 comme un tableau de nombres
  formations: Formation[] = [];

  constructor(
    private formationService: formationService,
    private participantService: ParticipantService,
    private formateurService: FormateurService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllFormateurs();
    this.getAllFormations();
  }

  getAllFormateurs() {
    this.formateurService.getAll().subscribe(
      (data) => {
        this.formateurs = data; // Mettre à jour la propriété 'formateurs' avec les données récupérées
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAllFormations() {
    this.formationService.getAll().subscribe(
      (data) => {
        this.formations = data; // Mettre à jour la propriété 'formations' avec les données récupérées
      },
      (error) => {
        console.log(error);
      }
    );
  }


  
  addFormateurToFormation(idFormation: number, idFormateur: number) {
    this.formateurService.addFormateurToFormation(idFormation, idFormateur).subscribe(
      (data) => {
        this.getAllFormateurs();
        this.getAllFormations();

      },
      (error) => {
        console.log(error);
        this.getAllFormateurs();
        this.getAllFormations();


      }
    );
  }

  deleteFormateurfromFormation (idFormation: number, idFormateur: number) {
    this.formateurService.deleteFormateurfromFormation(idFormation, idFormateur).subscribe(
      (data) => {
        this.getAllFormateurs();
        this.getAllFormations();

      },
      (error) => {
        console.log(error);
        this.getAllFormateurs();
        this.getAllFormations();

      }
    );
  }
}
