import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from '../models/formation';
import { Paiement } from '../models/paiement';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit{
 
 
  constructor(private route: ActivatedRoute,private formationService:FormationService,private router:Router)
    
  {

  }

  formation !:Formation;
  formations!:Formation[];
  paiements!:Paiement[];
  paiement!:Paiement;

 
  ngOnInit(): void {

    this.formation=new Formation();
    this.afficherAll();
   

  }
  afficherAll() {
    this.formationService.getAll().subscribe(response => {
      this.formations = response;
      for (let form of this.formations) {
        this.formationService.getPaiementsByFormationId(form.idForm).subscribe(response => {
          form.paiements = response;
        });
      }
    });
  }

  voirFormation(id: number) {
    this.router.navigate(['/formations', id]);
  }
  
  /*afficherAll()
  {
    this.formationService.getAll().subscribe(
      response=>
      {
        this.formations=response
        for(let form of this.formations)
        {
          for(let p of form.paiements)
        {
          this.formationService.getFormationsWithPaiements(p.idForm).subscribe(
            response=>p.paiements=response
          )
        }
        }
        
      }
    )
  }*/

}
