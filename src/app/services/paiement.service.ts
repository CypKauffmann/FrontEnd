import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paiement } from '../models/paiement';

@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Paiement[]>('http://localhost:8015/api/paiements');
  }

  getById(id:number) {
    return this.http.get<Paiement>(`http://localhost:8015/api/paiements/${id}`);
  }

  add(paie:Paiement) {
    return this.http.post('http://localhost:8015/api/paiements', paie);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8015/api/paiements/${id}`);
  }
}
