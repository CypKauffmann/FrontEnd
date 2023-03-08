import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { PersonneComponent } from './composant/personne/personne.component';

const routes:Routes=[
  {path:'afficherPersonne',component:PersonneComponent}


  
]
=======
import { CommercialComponent } from './composant/commercial/commercial.component';

const routes: Routes = [
  {path:'afficherRdv', component:CommercialComponent}
];
>>>>>>> main

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
<<<<<<< HEAD
  exports:
  [
    RouterModule
  ]
=======
  exports: [RouterModule]
>>>>>>> main
})
export class AppRoutingModule { }
