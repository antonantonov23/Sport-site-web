import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Team }        from '../../_models/team';
import { TeamService } from '../_services/team.service'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})

export class TeamComponent implements OnInit {
  team: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teamService: TeamService,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.teamService.getTeam(id)
      .then(team => this.team = team);
  }
}
