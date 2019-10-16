import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthenticationService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(fullName: string, email: string, password: string) {
    return this.http.post<any>(`${this.baseUrl}/account/login`, { fullName: fullName, email: email, password: password })
      .pipe(map(user => {
        if (user && user.isAdmin) {
          localStorage.setItem('currentAdmin', JSON.stringify(user));
        }

        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentAdmin');
  }

  currentAdmin() {
    return localStorage.currentAdmin || false;
  }
}
