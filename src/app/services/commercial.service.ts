import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commercial } from '../models/commercial';

@Injectable({
  providedIn: 'root',
})
export class commercialService {
  constructor(private http: HttpClient) {}


  edit(commercial: Commercial) {
    return this.http.put(`http://localhost:8015/api/commercials`, commercial);
}


}