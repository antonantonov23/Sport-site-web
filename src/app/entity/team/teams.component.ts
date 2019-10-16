import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Team }        from '../../_models/team';
import { TeamService } from '../_services/team.service'

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./team.component.scss']
})

export class TeamsComponent implements OnInit {
  teams: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teamService: TeamService,
  ) { }

  getTeams(): void {
    this.teamService.getTeams().then(teams => {
      this.teams = teams;
    });
  }

  ngOnInit() {
    this.getTeams();
  }
}
