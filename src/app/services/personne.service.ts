import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root',
})
export class personneService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Personne[]>('http://localhost:8015/api/personnes');
  }

  getById(id: number) {
    return this.http.get<Personne>(`http://localhost:8015/api/personnes/${id}`);
  }

  getByHist(id: number) {
    return this.http.get<Personne>(
      `http://localhost:8015/api/personnesByHist/${id}`
    );
  }

  getByRdv(id: number) {
    return this.http.get<Personne>(
      `http://localhost:8015/api/personnesByRdv/${id}`
    );
  }

  add(personne: Personne) {
    return this.http.post('http://localhost:8015/api/personnes', personne);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8015/api/personnes/${id}`);
  }
  
  update(id: number, personne: Personne)
  {
    return this.http.put<Personne>(`http://localhost:8015/api/personnes/${id}`,personne);
    
  }
  
}
