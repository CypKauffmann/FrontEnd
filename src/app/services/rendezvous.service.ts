import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RendezVous } from '../models/rendez-vous';

@Injectable({
  providedIn: 'root'
})
export class RendezvousService {
  
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<RendezVous[]>('http://localhost:8015/api/rendezvous');
  }

  getById(id:number) {
    return this.http.get<RendezVous>(`http://localhost:8015/api/rendezvous/${id}`);
  }

  getByPers(id:number) {
    return this.http.get<RendezVous>(
      `http://localhost:8015/api/rendezvousByPers/${id}`
    );
  }

  add(rdv:RendezVous) {
    return this.http.post('http://localhost:8015/api/rendezvous', rdv);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8015/api/rendezvous/${id}`);
  }
}
