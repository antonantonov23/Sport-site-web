import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AppManageComponent } from './app-manage.component';

import { UsersComponent } from './users/users.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageNavigationComponent } from './manage-navigation/manage-navigation.component';
import { SportCategoriesComponent } from './sport-categories/sport-categories.component';
import { EventsComponent } from './events/events.component'
import { ProfileComponent } from './profile/profile.component'

import { appManageRouting } from './app-manage.routing';
import { LoginComponent } from './login/login.component';

import { FormsModule }   from '@angular/forms';
import { ManageAuthGuard } from './_guards/manage-auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { MainService } from './_services/main.service';

@NgModule({
  declarations: [
    AppManageComponent,
    UsersComponent,
    LeaguesComponent,
    TeamsComponent,
    PlayersComponent,
    DashboardComponent,
    ManageNavigationComponent,
    SportCategoriesComponent,
    EventsComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(appManageRouting),
  ],
  providers: [
    ManageAuthGuard,
    AuthenticationService,
    MainService,
    HttpClient
  ]
})

export class AppManageModule { }
