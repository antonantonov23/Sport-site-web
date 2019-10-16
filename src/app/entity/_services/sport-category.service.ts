import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()

export class SportCategoryService {

  private headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getSportCategory(id: number) {
    return this.http.get(`${this.baseUrl}/sportCategories/${id}`, { headers: this.headers })
      .toPromise()
      .then(response => response);
  }

  getSportCategories() {
    return this.http.get(`${this.baseUrl}/sportCategories`, { headers: this.headers })
      .toPromise()
      .then(response => response);
  }
}
