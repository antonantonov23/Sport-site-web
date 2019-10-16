import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()

export class LeagueService {

  private headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getLeagues() {
    return this.http.get(`${this.baseUrl}/leagues`, { headers: this.headers })
      .toPromise()
      .then(response => response);
  }

  getLeague(id: number) {
    return this.http.get(`${this.baseUrl}/leagues/${id}`, { headers: this.headers })
      .toPromise()
      .then(response => response);
  }

}