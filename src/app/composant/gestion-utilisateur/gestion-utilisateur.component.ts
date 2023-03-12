import { Component, OnInit } from '@angular/core';
import { Commercial } from 'src/app/models/commercial';
import { Formateur } from 'src/app/models/formateur';
import { Participant } from 'src/app/models/participant';
import { Utilisateur } from 'src/app/models/utilisateur';
import { commercialService } from 'src/app/services/commercial.service';
import { FormateurService } from 'src/app/services/formateur.service';
import { ParticipantService } from 'src/app/services/participant.service';
import { utilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css'],
})
export class GestionUtilisateurComponent implements OnInit {
  utilisateurs: Utilisateur[] = [];
  nouvelUtilisateur: Utilisateur = new Utilisateur();
  showPassword: boolean = false;
  searchText: string = ''; // Initialiser la valeur de recherche à une chaîne vide
  utilisateursFiltres: Utilisateur[] = []; // stockez les données filtrées ici
  editingUser: Utilisateur | null = null;

  constructor(
    private utilisateurService: utilisateurService,
    private commercialService: commercialService,
    private formateurService: FormateurService,
    private participantService: ParticipantService
  ) {}


  ngOnInit() {
    this.utilisateurService.getAll().subscribe((data: Utilisateur[]) => {
      this.utilisateurs = data;
      this.utilisateursFiltres = data; // initialisez les données filtrées avec toutes les données
    });
  }

  getAll() {
    this.utilisateurService.getAll().subscribe((data: Utilisateur[]) => {
      this.utilisateurs = data;
    });
  }

  ajouterUtilisateur() {
    console.log(this.nouvelUtilisateur.nomPers);
    this.utilisateurService.add(this.nouvelUtilisateur).subscribe(() => {
      this.nouvelUtilisateur = new Utilisateur(); // Réinitialiser l'objet nouvelUtilisateur après l'ajout
      this.getAll();
    });
  }

  getById(id: number) {
    this.utilisateurService.getById(id).subscribe((data: Utilisateur) => {
      this.utilisateurs = [data];
    });
  }

  edit(utilisateur: Utilisateur) {
    this.utilisateurService.edit(utilisateur).subscribe(() => {
      this.getAll();
    });
  }

  //Affiche le formulaire de modification
  showEditForm(utilisateur: Utilisateur) {
    if (utilisateur) {
      this.editingUser = { ...utilisateur };
  
      if (utilisateur.role) {
        if (utilisateur.role.nomRole === 'Commercial') {
          this.editingUser = { ...this.editingUser } as Commercial;
        } else if (utilisateur.role.nomRole === 'Participant') {
          this.editingUser = { ...this.editingUser } as Participant;
        } else if (utilisateur.role.nomRole === 'Formateur') {
          this.editingUser = { ...this.editingUser } as Formateur;
        }
      }
    } else {
      this.editingUser = null;
    }
  }
  

  //Soumet le formulaire de modification
  submitEditForm() {
    if (this.editingUser) {
      if (this.editingUser.role) {
        if (this.editingUser.role.nomRole === 'Commercial') {
          this.commercialService
            .edit(this.editingUser as Commercial)
            .subscribe((response) => {
              this.getAll();
            });
        } else if (this.editingUser.role.nomRole === 'Participant') {
          this.participantService
            .edit(this.editingUser as Participant)
            .subscribe((response) => {
              this.getAll();
            });
        } else if (this.editingUser.role.nomRole === 'Formateur') {
          this.formateurService
            .edit(this.editingUser as Formateur)
            .subscribe((response) => {
              this.getAll();
            });
        } else {
          this.utilisateurService
            .edit(this.editingUser)
            .subscribe((response) => {
              this.getAll();
            });
        }
      } else {
        this.utilisateurService.edit(this.editingUser).subscribe((response) => {
          this.getAll();
        });
      }
      this.editingUser = null;
    }
  }

  //Annule le formulaire de modification
  cancelEditForm() {
    this.editingUser = null;
  }

  delete(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) {
      this.utilisateurService
        .getById(id)
        .subscribe((utilisateur: Utilisateur) => {
          this.utilisateurService.delete(utilisateur.idPers).subscribe(() => {
            this.getAll();
          });
        });
    }
  }



  //Assigne un rôle à un utilisateur




  assignParticipant(idPers: number): void {
    this.utilisateurService.assignParticipant(idPers).subscribe(
      (response) => {
        console.log(response);
        this.getAll();
      },
      (error) => {
        console.log(error);
        this.getAll();
      }
    );
  }

  assignFormateur(idPers: number): void {
    this.utilisateurService.assignFormateur(idPers).subscribe(
      (response) => {
        console.log(response);
        this.getAll();
      },
      (error) => {
        console.log(error);
        this.getAll();
      }
    );
  }

  assignCommercial(idPers: number): void {
    this.utilisateurService.assignCommercial(idPers).subscribe(
      (response) => {
        console.log(response);
        this.getAll();
      },
      (error) => {
        console.log(error);
        this.getAll();
      }
    );
  }





  //Filtre les utilisateurs  grâce à la valeur de recherche
  filterBySearchText() {
    console.log('Filtering by search text:', this.searchText);
    this.utilisateurService.getAll().subscribe((data: Utilisateur[]) => {
      this.utilisateurs = data.filter((utilisateur) => {
        const role = utilisateur.role?.nomRole || '';
        const search = this.searchText.toLowerCase();
        const match =
          role.toLowerCase().includes(search) ||
          utilisateur.nomPers.toLowerCase().includes(search) ||
          utilisateur.prenomPers.toLowerCase().includes(search) ||
          utilisateur.username.toLowerCase().includes(search) ||
          utilisateur.email.toLowerCase().includes(search) ||
          utilisateur.tel.toLowerCase().includes(search);
        console.log('User:', utilisateur);
        console.log('Role:', role);
        console.log('Search:', search);
        console.log('Match:', match);
        return match;
      });
    });
  }


  //Filtre les utilisateurs par rôle
  filterByNoRole() {
    console.log('Filtering by no role');
    this.utilisateurService.getAll().subscribe((data: Utilisateur[]) => {
      this.utilisateurs = data.filter((utilisateur) => {
        return !utilisateur.role;
      });
    });
  }


  //Remet à zéro les filtres
  resetFilters() {
    console.log('Resetting filters');
    this.searchText = '';
    this.utilisateursFiltres = this.utilisateurs; // réinitialisez les données filtrées avec toutes les données
    this.getAll();
  }




  afficherFormulaire = false;















}
