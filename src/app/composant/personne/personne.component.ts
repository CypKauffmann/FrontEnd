import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personne } from 'src/app/models/personne';
import { Utilisateur } from 'src/app/models/utilisateur';
import { personneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
  export class PersonneComponent implements OnInit{

    constructor(private pservice:personneService,/*private authService: AuthService*/)
    {
      
    }

    
    // déclaration des variables
   
    personnes: Personne[] = [];
    personne: Personne = new Personne();
    editingUser: Personne | null = null;
    //utilisateur: Utilisateur = new Utilisateur();

    ngOnInit(): void {
      this.getAll();
      //this.utilisateur = this.authService.utilisateurConnecte; // accès à l'utilisateur connecté

    }

    getAll(): void {
      this.pservice.getAll().subscribe((personnes) => {
        this.personnes = personnes;
      });
    }

    ajouter(form: any): void {
      if (this.editingUser) {
        this.modifier(form);
      } else {
        this.pservice.add(this.personne).subscribe((personne) => {
          console.log('Personne ajoutée avec succès :', personne);
          this.personnes.push(this.personne);
          this.personne = new Personne();
          form.reset();
        });
      }
    }

    supprimer(id: number): void {
      this.pservice.delete(id).subscribe(() => {
        console.log('Personne supprimée avec succès');
        this.personnes = this.personnes.filter((personne) => personne.idPers !== id);
      });
    }

    modifier(form: any): void {
      if (this.editingUser && this.editingUser.idPers) {
        this.pservice.update(this.editingUser.idPers, this.personne).subscribe((personne) => {
          console.log('Personne modifiée avec succès :', personne);
          const index = this.personnes.findIndex((p) => p.idPers === personne.idPers);
          this.personnes[index] = personne;
          this.personne = new Personne();
          this.editingUser = null;
          form.reset();
        });
      }
    }

    selectionnerPersonne(personne: Personne): void {
      this.editingUser = personne;
      this.personne = { ...personne };
    }
  }