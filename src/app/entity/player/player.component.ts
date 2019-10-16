import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Player }        from '../../_models/player';
import { PlayerService } from '../_services/player.service'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})

export class PlayerComponent implements OnInit {
  player: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.playerService.getPlayer(id)
      .then(player => this.player = player);
  }
}
