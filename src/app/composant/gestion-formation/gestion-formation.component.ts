import { Component } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Participant } from 'src/app/models/participant';
import { FormateurService } from 'src/app/services/formateur.service';
import { formationService } from 'src/app/services/formation.service';
import { ParticipantService } from 'src/app/services/participant.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gestion-formation',
  templateUrl: './gestion-formation.component.html',
  styleUrls: ['./gestion-formation.component.css'],
})
export class GestionFormationComponent {
  formations: Formation[] = [];
  formation: Formation = new Formation();
  participants: Participant[] = [];
  participantsWithoutFormation: Participant[] = [];
  selectedParticipantId: number = 0;
  selectedFormationIds2: number[] = [];
  selectedFormationIds: number[] = []; // tableau des formations sélectionnées pour chaque participant
  dateDebut: Date = new Date();
  dateFin: Date = new Date();
  isEditing: boolean = false;
  formationAModifier: Formation = new Formation();
  formationInitiale: Formation = new Formation();
  isEditMode: boolean = false;
  hasAffectation: boolean = false;



  constructor(
    private formationService: formationService,
    private participantService: ParticipantService,
    private formateurService: FormateurService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.getAllFormationsWithParticipantsAndFormateurs();
    this.getParticipantsWithoutFormation();
    this.getAllParticipants();
  }

  getAllParticipants() {
    this.participantService.getAll().subscribe(
      (data) => {
        this.participants = data; // Mettre à jour la propriété 'participants' avec les données récupérées
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getAllFormationsWithParticipantsAndFormateurs() {
    this.formationService
      .getAllFormationsWithParticipantsAndFormateurs()
      .subscribe(
        (data) => {
          this.formations = data;
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getParticipantsWithoutFormation() {
    this.participantService.getParticipantsWithoutFormation().subscribe(
      (data) => {
        this.participantsWithoutFormation = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  addParticipantToFormation(idFormation: number, idParticipant: number) {
    this.participantService
      .addParticipantToFormation(idFormation, idParticipant)
      .subscribe(
        (data) => {
        
          // Définir la variable hasAffectation sur true pour masquer les formations affectées
          this.hasAffectation = true;
            // Mettre à jour les données de l'application après l'affectation
            this.getAllFormationsWithParticipantsAndFormateurs();
            this.getParticipantsWithoutFormation();
            this.getAllParticipants();
        },
        (error) => {
          console.log(error);
          this.getAllFormationsWithParticipantsAndFormateurs();
          this.getParticipantsWithoutFormation();
          this.getAllParticipants();
        }
      );
  }
  
  

  onSubmit() {
    this.formationService.add(this.formation).subscribe(
      (data) => {
        console.log(data);
        // Réinitialiser le formulaire après l'ajout de la formation
        this.formation = new Formation();
        this.getAllFormationsWithParticipantsAndFormateurs();
        this.getParticipantsWithoutFormation();
        this.getAllParticipants();
      },
      (error) => {
        console.log(error);
        this.getAllFormationsWithParticipantsAndFormateurs();
        this.getParticipantsWithoutFormation();
        this.getAllParticipants();
      }
    );
  }


  resetForm() {
    this.formation = new Formation();
    this.isEditing = false;
  }
  
  onEdit(formation: Formation) {
    this.isEditing = true;
    this.formation = Object.assign({}, formation);
  }
  
  


  onCancel() {
    this.resetForm();
  }
  
  
  
updateDuree() {
  const dateDebut = new Date(this.formation.dateDebut);
  const dateFin = new Date(this.formation.dateFin);
  const diffTime = Math.abs(dateFin.getTime() - dateDebut.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  this.formation.duree = diffDays;
}


  delete(id: number) {
    this.formationService.delete(id).subscribe(
      (data) => {
        this.getAllFormationsWithParticipantsAndFormateurs();
        this.getParticipantsWithoutFormation();
        this.getAllParticipants();
      },
      (error) => {
        console.log(error);
        this.getAllFormationsWithParticipantsAndFormateurs();
        this.getParticipantsWithoutFormation();
        this.getAllParticipants();
      }
    );
  }

  removeParticipantFromFormation (idFormation: number, idParticipant: number) {
    this.participantService.removeParticipantFromFormation(idFormation, idParticipant).subscribe(
      (data) => {
        this.getAllFormationsWithParticipantsAndFormateurs();
        this.getParticipantsWithoutFormation();
        this.getAllParticipants();
      },
      (error) => {
        console.log(error);
        this.getAllFormationsWithParticipantsAndFormateurs();
        this.getParticipantsWithoutFormation();
        this.getAllParticipants(); }
    );
  }

  getFilteredFormations(participant: Participant): Formation[] {
    // Récupérer les formations non affectées au participant sélectionné
    return this.formations.filter((formation: Formation) => {
      return participant.formations.findIndex((f: Formation) => f.idForm === formation.idForm) === -1;
    });
  }
  
  
}
