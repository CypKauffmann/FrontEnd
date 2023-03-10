import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { ParticipantComponent } from './composant/participant/participant.component';
import { FormateurComponent } from './composant/formateur/formateur.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PersonneComponent } from './composant/personne/personne.component';

=======
import { GestionUtilisateurComponent } from './composant/gestion-utilisateur/gestion-utilisateur.component';
import { GestionFormateurComponent } from './composant/gestion-formateur/gestion-formateur.component';
import { GestionFormationComponent } from './composant/gestion-formation/gestion-formation.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommercialComponent } from './composant/commercial/commercial.component';
import { ParticipantComponent } from './composant/participant/participant.component';
import { FormateurComponent } from './composant/formateur/formateur.component';
import { PersonneComponent } from './composant/personne/personne.component';
>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
    ParticipantComponent,
    FormateurComponent,
<<<<<<< HEAD
    PersonneComponent
    
=======
    PersonneComponent,
    CommercialComponent,
    GestionUtilisateurComponent,
    GestionFormateurComponent,
    GestionFormationComponent
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
