import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LeagueService }  from '../_services/league.service'

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})

export class LeagueComponent implements OnInit {
  league: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private leagueService: LeagueService,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.leagueService.getLeague(id).then(league => {
      this.league = league;
    });
  }
}
