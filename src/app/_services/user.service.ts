import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()

export class UserService {

  private headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('${this.baseUrl}/users');
  }

  getUser() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userId = currentUser.id;

    return this.http.get(`${this.baseUrl}/account/${userId}`, { headers: this.headers });
  }

  getUserEvents(userId: number) {
    return this.http.get('localhost:8080');
  }
}