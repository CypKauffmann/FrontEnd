import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    CommercialComponent,
    RendezvousComponent
=======
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
