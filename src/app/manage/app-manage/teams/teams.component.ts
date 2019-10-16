import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MainService }  from '../_services/main.service'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  teams: any = [];
  team: any = {};

  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  constructor(
    private mainService: MainService,
    private modal: NgbModal,
    private router: Router
  ) {}

  newTeam() {
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  onSubmitNew() {
    this.mainService.newEntity('team', this.team).then(res => {
      console.log(res);
      this.router.navigate(['/manage/teams']);
    });
  }

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

  ngOnInit() {
    this.mainService.getTeams().then(teams => {
      this.teams = teams;
    });
  }
}
