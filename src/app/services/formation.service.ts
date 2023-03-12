import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';

@Injectable({
  providedIn: 'root',
})
export class formationService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Formation[]>('http://localhost:8015/api/formations');
  }
 

  add(utilisateur: Formation) {
    console.log("service "+utilisateur.nomForm)
    return this.http.post('http://localhost:8015/api/formations', Formation);
  }


  delete(id: number) {
    return this.http.delete(`http://localhost:8015/api/formations/${id}`);
  }

 
}