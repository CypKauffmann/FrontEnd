import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    console.log("service "+utilisateur.nomPers)
    return this.http.post('http://localhost:8015/api/utilisateurs/', utilisateur);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8015/api/utilisateurs/${id}`);
  }

  getByUsername(username: string){
    return this.http.get<Utilisateur>(`http://localhost:8015/api/utilisateurs/username/${username}`);
  }


  assignParticipant(idPers: number){
    return this.http.get(`http://localhost:8015/api/utilisateurs/assign/participant/${idPers}`);
  }
  
  assignFormateur(idPers: number){
    return this.http.get(`http://localhost:8015/api/utilisateurs/assign/formateur/${idPers}`);
  }
  
  assignCommercial(idPers: number){
    return this.http.get(`http://localhost:8015/api/utilisateurs/assign/commercial/${idPers}`);
  }
  
  edit(utilisateur: Utilisateur) {
    return this.http.put(`http://localhost:8015/api/utilisateurs/`, utilisateur);
  }




}