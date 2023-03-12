import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Historique } from '../models/historique';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Historique[]>('http://localhost:8015/api/historiques');
  }

  getById(id:number) {
    return this.http.get<Historique>(`http://localhost:8015/api/historiques/${id}`);
  }

  getByPers(id:number) {
    return this.http.get<Historique>(
      `http://localhost:8015/api/historiquesByPers/${id}`
    );
  }

  add(rdv:Historique) {
    return this.http.post('http://localhost:8015/api/historiques', rdv);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8015/api/historiques/${id}`);
  }
}
