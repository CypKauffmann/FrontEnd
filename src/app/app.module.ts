import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ParticipantComponent } from './composant/participant/participant.component';
import { FormateurComponent } from './composant/formateur/formateur.component';
import { PersonneComponent } from './composant/personne/personne.component';
import { GestionUtilisateurComponent } from './composant/gestion-utilisateur/gestion-utilisateur.component';
import { GestionFormateurComponent } from './composant/gestion-formateur/gestion-formateur.component';
import { GestionFormationComponent } from './composant/gestion-formation/gestion-formation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommercialComponent } from './composant/commercial/commercial.component';
import { EnteteComponent } from './composant/entete/entete.component';
import { FormationComponent } from './formation/formation.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantComponent,
    FormateurComponent,
    PersonneComponent,
    CommercialComponent,
    GestionUtilisateurComponent,
    GestionFormateurComponent,
    GestionFormationComponent,
    EnteteComponent,
    FormationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
