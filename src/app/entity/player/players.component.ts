import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Player }        from '../../_models/player';
import { PlayerService } from '../_services/player.service'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./player.component.scss']
})

export class PlayersComponent implements OnInit {
  players: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService,
  ) { }

  getPlayers(): void {
    this.playerService.getPlayers().then(players => {
      this.players = players;
    });
  }

  ngOnInit() {
    this.getPlayers();
  }
}
