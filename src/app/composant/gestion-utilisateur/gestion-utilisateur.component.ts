import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur';
import { utilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.css']
})
export class GestionUtilisateurComponent implements OnInit {
  utilisateurs: Utilisateur[] = [];
  nouvelUtilisateur: Utilisateur = new Utilisateur();
  showPassword: boolean = false;
  constructor(private utilisateurService: utilisateurService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.utilisateurService.getAll().subscribe((data: Utilisateur[]) => {
      this.utilisateurs = data;
    });
  }

  ajouterUtilisateur() {
    console.log(this.nouvelUtilisateur.nomPers)
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

  delete(id: number) {
    if (confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) {
      this.utilisateurService.getById(id).subscribe((utilisateur: Utilisateur) => {
        this.utilisateurService.delete(utilisateur.idPers).subscribe(() => {
          this.getAll();
        });
      });
    }
  }

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
  





}
