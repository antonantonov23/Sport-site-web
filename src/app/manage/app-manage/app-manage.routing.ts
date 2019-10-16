import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppManageComponent } from './app-manage.component';

import { LoginComponent } from './login/login.component';

import { UsersComponent } from './users/users.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SportCategoriesComponent } from './sport-categories/sport-categories.component';
import { EventsComponent } from './events/events.component'
import { ProfileComponent } from './profile/profile.component'

import { ManageAuthGuard } from './_guards/manage-auth.guard';

export const appManageRouting: Routes = [
  {
    path: 'login', component: LoginComponent

  },
  {
    path: '',
    component: AppManageComponent,
    canActivate: [ ManageAuthGuard ],
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'users', component: UsersComponent },
      { path: 'sport_categories', component: SportCategoriesComponent },
      { path: 'leagues', component: LeaguesComponent },
      { path: 'teams', component: TeamsComponent },
      { path: 'players', component: PlayersComponent },
      { path: 'events', component: EventsComponent },
    ]
  }
];
