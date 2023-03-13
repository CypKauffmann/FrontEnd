import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';
import { Paiement } from '../models/paiement';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

 getAll()
 {
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
 
}
