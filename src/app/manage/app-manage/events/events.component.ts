import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { MainService }  from '../_services/main.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {
  events: any = [];
  event: any = {};

  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  constructor(
    private mainService: MainService,
    private modal: NgbModal,
    private router: Router
  ) {}

  newEvent() {
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  onSubmitNew() {
    this.mainService.newEntity('baseEvent', this.event).then(res => {
      console.log(res);
      this.router.navigate(['/manage/events']);
    });
  }

  editEntity() {
    alert('Coming soon');
  }

  deleteEntity() {
    const playerId = 1;

    if (confirm('Are you sure you want to delete the entity?')) {
      this.mainService.destroyEntity('players', playerId);
      this.router.navigate(['/manage/events']);
    }
  }

  ngOnInit() {
    this.mainService.getEvents().then(events => {
      this.events = events;
    });
  }
}
