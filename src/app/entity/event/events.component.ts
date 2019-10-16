import { Component, OnInit } from '@angular/core';

import { EventService } from '../_services/event.service'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventsComponent implements OnInit {
  events: any = [];

  constructor(
    private eventService: EventService
  ){}

  ngOnInit() {
    this.eventService.getEvents().then(events => {
      this.events = events;
    });
  }
}
