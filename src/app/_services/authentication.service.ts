import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {

  private headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  register(fullName: string, password: string, email: string) {
    return this.http.post(`${this.baseUrl}/account/registerUserAccount`, { fullName: fullName, password: password, email: email }, { headers: this.headers })
      .pipe(map(user => {
        return user;
      }));
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/account/login`, { fullName: 'dummyValue', email: email, password: password })
      .pipe(map(user => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  currentUser() {
    return localStorage.currentUser || null;
  }
}