import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable()

export class EventService {

  private headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get(`${this.baseUrl}/baseEvents`, { headers: this.headers })
      .toPromise()
      .then(response => response);
  }

  getEvent(id: number) {
    return this.http.get(`${this.baseUrl}/baseEvents/${id}`, { headers: this.headers })
      .toPromise()
      .then(response => response);
  }

  subscribeToEvent(subscriberId: number, eventId: number) {
    return this.http.post(`${this.baseUrl}/baseEvents/subscribe/${subscriberId}/${eventId}`, { headers: this.headers })
      .toPromise()
      .then(response => response);
  }

  unsubscribeFromEvent() {

  }

  createMeeting(eventId: number) {

  }
}