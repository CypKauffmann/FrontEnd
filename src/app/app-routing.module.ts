import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonneComponent } from './composant/personne/personne.component';
import { AppComponent } from './app.component';
import { ParticipantComponent } from './composant/participant/participant.component';
import { FormateurComponent } from './composant/formateur/formateur.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormationComponent } from './formation/formation.component';
import { GestionUtilisateurComponent } from './composant/gestion-utilisateur/gestion-utilisateur.component';
import { GestionFormationComponent } from './composant/gestion-formation/gestion-formation.component';
import { CommercialComponent } from './composant/commercial/commercial.component';

const routes: Routes = [
  {path:'afficherPersonnes', component:PersonneComponent},
  {path:'afficherFormateurs', component:FormateurComponent},
  {path:'afficherParticipants', component:ParticipantComponent},
  {path:'afficherFormations', component:FormationComponent},
  { path: 'formation/:id', component: FormationComponent },
  {path:'GestionUtilisateur', component: GestionUtilisateurComponent},
  {path:'GestionFormation', component: GestionFormationComponent},
  {path:'afficherEspaceCommercial', component: CommercialComponent},

];

@NgModule({
  declarations: [],
  imports: [
    
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
