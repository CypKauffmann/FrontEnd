import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formateur } from '../models/formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private http: HttpClient) 
  { }

  
  getAll() {
    return this.http.get<Formateur[]>('http://localhost:8015/api/formateurs');
  }

  getById(id: number) {
    return this.http.get<Formateur>(`http://localhost:8015/api/formateurs/${id}`);
  }

  /*
  getByHist(id: number) {
    return this.http.get<Formateur>(
      `http://localhost:8015/api/personnesByHist/${id}`
    );
  }

  getByRdv(id: number) {
    return this.http.get<Formateur>(
      `http://localhost:8015/api/personnesByRdv/${id}`
    );
  }
    */

  add(formateur: Formateur) {
    return this.http.post('http://localhost:8015/api/formateurs', formateur);
  }


  delete(id: number) {
    return this.http.delete(`http://localhost:8015/api/formateurs/${id}`);
  }

}

