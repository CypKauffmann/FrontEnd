import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';
import { Paiement } from '../models/paiement';
import { Participant } from '../models/participant';

@Injectable({
  providedIn: 'root',
})
export class formationService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Formation[]>('http://localhost:8015/api/formations');
  }
 
  getFormationsWithPaiements(idForm:number)
  {
  
    return this.http.get<Formation[]>('http://localhost:8015/api/formations/paiements/'+idForm);
   
  }

  getPaiementsByFormationId(idForm: number)
  {
    return this.http.get<Paiement[]>(`http://localhost:8015/api/formations/${idForm}/paiements/`);
  }

  add(utilisateur: Formation) {
    console.log("formation ajoutée : ", utilisateur);
    return this.http.post('http://localhost:8015/api/formations', utilisateur);
  }
  


  delete(id: number) {
    return this.http.delete(`http://localhost:8015/api/formations/${id}`);
  }

 
  getAllFormationsWithParticipantsAndFormateurs() {
    return this.http.get<Formation[]>('//localhost:8015/api/participants-formateurs');
  }

  

}