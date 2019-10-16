import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { League }         from '../../_models/league';
import { LeagueService }  from '../_services/league.service'

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./league.component.scss']
})

export class LeaguesComponent implements OnInit {
  leagues: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private leagueService: LeagueService,
  ) { }

  ngOnInit() {
    this.leagueService.getLeagues().then( leagues => {
      this.leagues = leagues;
    });
  }
}
