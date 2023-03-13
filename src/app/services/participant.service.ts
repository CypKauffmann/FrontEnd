import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Participant } from '../models/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {


  constructor(private http: HttpClient) 
  { }

  
  getAll() {
    return this.http.get<Participant[]>('http://localhost:8015/api/participants/');
  }

  getById(id: number) {
    return this.http.get<Participant>(`http://localhost:8015/api/participants/${id}`);
  }


  add(participant: Participant) {
    return this.http.post('http://localhost:8015/api/participants/', participant);
  }


  delete(id: number) {
    return this.http.delete(`http://localhost:8015/api/participants/${id}`);
  }


}
