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
import { GestionUtilisateurComponent } from './composant/gestion-utilisateur/gestion-utilisateur.component';
import { GestionFormationComponent } from './composant/gestion-formation/gestion-formation.component';
import { GestionFormateurComponent } from './composant/gestion-formateur/gestion-formateur.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './composant/accueil/accueil.component';
import { CommercialComponent } from './composant/commercial/commercial.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { AcAdminComponent } from './composant/ac-admin/ac-admin.component';

const routes: Routes = [
  {path:'afficherPersonnes', component:PersonneComponent, canActivate:[AuthGuardGuard]},
  {path:'afficherFormateurs', component:FormateurComponent, canActivate:[AuthGuardGuard]},
  {path:'afficherParticipants', component:ParticipantComponent, canActivate:[AuthGuardGuard]},
  {path:'GestionUtilisateur', component: GestionUtilisateurComponent, canActivate:[AuthGuardGuard]},
  {path:'GestionFormation', component: GestionFormationComponent, canActivate:[AuthGuardGuard]},
  {path:'GestionFormateur', component: GestionFormateurComponent, canActivate:[AuthGuardGuard]},
  {path:'afficherEspaceCommercial', component: CommercialComponent, canActivate:[AuthGuardGuard]},
  {path:'Connexion', component: LoginComponent},
  {path:'inscription', component: InscriptionComponent},
  {path:'pageAccueil', component: AccueilComponent},
  {path:'pageAccueilAdmin', component: AcAdminComponent}

];

@NgModule({
  declarations: [],
  imports: [
    
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
