import { Component } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { FormateurService } from 'src/app/services/formateur.service';
import { formationService } from 'src/app/services/formation.service';
import { ParticipantService } from 'src/app/services/participant.service';


@Component({
  selector: 'app-gestion-formation',
  templateUrl: './gestion-formation.component.html',
  styleUrls: ['./gestion-formation.component.css']
})
export class GestionFormationComponent {

  formations: Formation[] = [];


  constructor(private formationService: formationService,
    private participantService: ParticipantService,
    private formateurService: FormateurService) { }


    
  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.formationService.getAll().subscribe(formations => {
      this.formations = formations;
      for (let formation of this.formations) {
        for (let participantId of formation.participants) {
          this.participantService.getById(participants).subscribe(participant => {
            formation.participants.push(participant);
          });
        }
        for (let formateurId of formation.participants) {
          this.formateurService.getById(formateur).subscribe(formateur => {
            formation.formateurs.push(formateur);
          });
        }
      }
    });
  }


  
}
