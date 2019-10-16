import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MainService }  from '../_services/main.service'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})

export class PlayersComponent implements OnInit {
  players: any = [];
  player: any = {};

  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  constructor(
    private mainService: MainService,
    private modal: NgbModal,
    private router: Router
  ) {}

  newPlayer() {
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  onSubmitNew() {
    this.mainService.newEntity('player', this.player).then(res => {
      console.log(res);
      this.router.navigate(['/manage/players']);
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
    this.mainService.getPlayers().then(players => {
      this.players = players;
    });
  }
}
