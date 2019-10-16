import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { EventService } from '../../entity/_services/event.service'
import { UserService }  from '../../_services/user.service'
import { Event } from '../../_models/event'

@Component({
  selector: 'user-events',
  templateUrl: './user-events.component.html',
})
export class UserEventsComponent implements OnInit {
  @Input() userId;
  events: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.eventService.getEvents().then(events => {
      this.events = events;
    });
  }
}
