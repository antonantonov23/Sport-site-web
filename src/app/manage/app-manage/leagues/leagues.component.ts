import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MainService }  from '../_services/main.service'

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {
  leagues: any = [];
  league: any = {};

  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  constructor(
    private mainService: MainService,
    private modal: NgbModal,
    private router: Router
  ) {}

  editEntity() {
    alert('Coming soon');
  }

  deleteEntity() {
    const playerId = 1;

    if (confirm('Are you sure you want to delete the entity?')) {
      this.mainService.destroyEntity('players', playerId);
      this.router.navigate(['/manage/players']);
    }
  }

  newLeague() {
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  onSubmitNew() {
    this.mainService.newEntity('league', this.league).then(res => {
      console.log(res);
      this.router.navigate(['/manage/leagues']);
    });
  }

  ngOnInit() {
    this.mainService.getLeagues().then(leagues => {
      this.leagues = leagues;
    });
  }
}
