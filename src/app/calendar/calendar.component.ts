import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';

import * as moment from 'moment';

import { Router } from '@angular/router';

import { EventService } from '../entity/_services/event.service';

const colors: any = {
  green: {
    primary: '#1d550d',
    secondary: '#3b6f2d'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {
  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [];

  refresh: Subject<any> = new Subject();

  events: any = [];
  // events: CalendarEvent[] = [
  //   {
  //     id: 3,
  //     start: subDays(startOfDay(new Date()), 1),
  //     end: addDays(new Date(), 1),
  //     title: 'Grigor Dimitrov',
  //     color: colors.green,
  //     actions: this.actions,
  //     allDay: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     },
  //     draggable: true
  //   }
  // ];

  activeDayIsOpen: boolean = true;

  constructor(
    private modal: NgbModal,
    private router: Router,
    private eventService: EventService
  ) {}

  reworkedEvents(evs: Object) {
    var date, newDate;

    return Object.values(evs).map(e => {
      date = moment(e.startTime, "DD/MM/YYYY HH:mm:ss").format("YYYY-MM-DD HH:mm:ss");
      newDate = new Date(date);

      e['start'] = newDate;
      e['title'] = e.firstTeam.nameOfTeam + " - " + e.secondTeam.nameOfTeam;

      return e;
    });
  }

  ngOnInit() {
    this.eventService.getEvents().then(events => {
      this.events = this.reworkedEvents(events);
    });
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  handleEvent(action: string, event: any): void {
    this.router.navigate(['/events/', event.id]);
  }
}
