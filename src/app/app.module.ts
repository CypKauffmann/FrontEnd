import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { ParticipantComponent } from './composant/participant/participant.component';
import { FormateurComponent } from './composant/formateur/formateur.component';
import { PersonneComponent } from './composant/personne/personne.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
=======
<<<<<<< HEAD
import { CommercialComponent } from './composant/commercial/commercial.component';
import { RendezvousComponent } from './composant/rendezvous/rendezvous.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
=======
import { GestionUtilisateurComponent } from './composant/gestion-utilisateur/gestion-utilisateur.component';
import { GestionFormateurComponent } from './composant/gestion-formateur/gestion-formateur.component';
import { GestionFormationComponent } from './composant/gestion-formation/gestion-formation.component';
>>>>>>> main
>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ParticipantComponent,
    FormateurComponent,
    PersonneComponent
=======
<<<<<<< HEAD
    CommercialComponent,
    RendezvousComponent
=======
    GestionUtilisateurComponent,
    GestionFormateurComponent,
    GestionFormationComponent
>>>>>>> main
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
