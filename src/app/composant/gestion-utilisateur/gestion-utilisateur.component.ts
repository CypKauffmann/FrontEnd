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

  constructor(private utilisateurService: utilisateurService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.utilisateurService.getAll().subscribe((data: Utilisateur[]) => {
      this.utilisateurs = data;
    });
  }

  add(utilisateur: Utilisateur) {
    this.utilisateurService.add(utilisateur).subscribe(() => {
      this.getAll();
    });

  }

  delete(id: number) {
    if (confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) {
      this.utilisateurService.delete(id).subscribe(() => {
        this.getAll();
      });
    }
  }
}
