import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GestionUtilisateurComponent } from './composant/gestion-utilisateur/gestion-utilisateur.component';
import { GestionFormateurComponent } from './composant/gestion-formateur/gestion-formateur.component';
import { GestionFormationComponent } from './composant/gestion-formation/gestion-formation.component';

@NgModule({
  declarations: [
    AppComponent,
    GestionUtilisateurComponent,
    GestionFormateurComponent,
    GestionFormationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
