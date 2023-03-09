import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GestionUtilisateurComponent } from './composant/gestion-utilisateur/gestion-utilisateur.component';

const routes: Routes = [
  {path:'GestionUtilisateur', component: GestionUtilisateurComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
