import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable()
export class MainService {

  private headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUser() {
    const id = JSON.parse(localStorage.currentAdmin).id

    return this.http.get(`${this.baseUrl}/account/${id}`, { headers: this.headers });
  }

  getUsers() {
    return this.http.get(`${this.baseUrl}/accounts`, { headers: this.headers })
      .toPromise()
      .then(response => response);
  }

  getLeagues() {
    return this.http.get(`${this.baseUrl}/leagues`, { headers: this.headers })
      .toPromise()
      .then(response => response);
  }

  getPlayers() {
    return this.http.get(`${this.baseUrl}/players`, { headers: this.headers })
      .toPromise()
      .then(response => response);
  }

  getSportCategories() {
    return this.http.get(`${this.baseUrl}/sportCategories`, { headers: this.headers })
      .toPromise()
      .then(response => response);
  }

  getTeams() {
    return this.http.get(`${this.baseUrl}/teams`, { headers: this.headers })
      .toPromise()
      .then(response => response);
  }

  getEvents() {
    return this.http.get(`${this.baseUrl}/baseEvents`, { headers: this.headers })
      .toPromise()
      .then(response => response);
  }

  newEntity(type: string, data: {}) {
    return this.http.post(`${this.baseUrl}/${type}`, data, { headers: this.headers })
      .toPromise()
      .then(response => response);
  }

  destroyEntity(type: string, id: number) {
    return this.http.delete(`${this.baseUrl}/${type}/${id}`, { headers: this.headers })
      .toPromise()
      .then(response => response);
  }
}
