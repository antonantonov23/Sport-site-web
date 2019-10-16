import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EventService }  from '../_services/event.service'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  event: any = {};

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router
  ){}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.eventService.getEvent(id).then(event => {
      this.event = event;
    });
  }

  subscribe() {
    const subscriberId = 2;
    const eventId = 2;

    this.eventService.subscribeToEvent(subscriberId, eventId).then(res => {
      console.log(res);
    });
  }

  createMeeting() {

  }
}
