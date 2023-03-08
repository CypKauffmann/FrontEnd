import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root',
})
export class utilisateurService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Utilisateur[]>('http://localhost:8015/api/utilisateurs/');
  }

  getById(id: number) {
    return this.http.get<Utilisateur>(`http://localhost:8015/api/utilisateurs/${id}`);
  }

  add(utilisateur: Utilisateur) {
    return this.http.post('http://localhost:8015/api/utilisateurs/', utilisateur);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8015/api/utilisateurs/${id}`);
  }

  getByUsername(username: string){
    return this.http.get<Utilisateur>(`http://localhost:8015/api/utilisateurs/username/${username}`);
  }
}
