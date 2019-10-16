import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';

import { AuthGuard } from '../_guards/auth.guard';

import { LeagueComponent }          from './league/league.component';
import { LeaguesComponent }         from './league/leagues.component';
import { PlayerComponent }          from './player/player.component';
import { PlayersComponent }         from './player/players.component';
import { SportCategoryComponent }   from './sport-category/sport-category.component';
import { SportCategoriesComponent } from './sport-category/sport-categories.component';
import { TeamComponent }            from './team/team.component';
import { TeamsComponent }           from './team/teams.component';
import { MeetingComponent } from './meeting/meeting.component';
import { MeetingsComponent } from './meeting/meetings.component';
import { EventComponent } from './event/event.component';
import { EventsComponent } from './event/events.component';

export const entityRoutes : Routes = [ {
  path: '',
  canActivate: [AuthGuard],
  children: [
    { path: 'leagues/:id',          component: LeagueComponent },
    { path: 'leagues',              component: LeaguesComponent },
    { path: 'players/:id',          component: PlayerComponent },
    { path: 'players',              component: PlayersComponent },
    { path: 'sport_categories/:id', component: SportCategoryComponent },
    { path: 'sport_categories',     component: SportCategoriesComponent },
    { path: 'teams/:id',            component: TeamComponent },
    { path: 'teams',                component: TeamsComponent },
    { path: 'meetings/:id',         component: MeetingComponent },
    { path: 'meetings',             component: MeetingsComponent },
    { path: 'events/:id',           component: EventComponent },
    { path: 'events',               component: EventsComponent },
  ]
}];
