import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Player } from '../../_models/player';

@Injectable()

export class PlayerService {

  private headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPlayer(id: number) {
    return this.http.get(`${this.baseUrl}/players/${id}`, { headers: this.headers })
      .toPromise()
      .then(response => response);
  }


  getPlayers() {
    return this.http.get(`${this.baseUrl}/players`, { headers: this.headers })
      .toPromise()
      .then(response => response);
  }
}
