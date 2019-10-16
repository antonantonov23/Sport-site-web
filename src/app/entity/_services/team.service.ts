import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()

export class TeamService {

  private headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTeam(id: number) {
    return this.http.get(`${this.baseUrl}/teams/${id}`, { headers: this.headers })
      .toPromise()
      .then(response => response);
  }

  getTeams() {
    return this.http.get(`${this.baseUrl}/teams`, { headers: this.headers })
      .toPromise()
      .then(response => response);
  }
}
