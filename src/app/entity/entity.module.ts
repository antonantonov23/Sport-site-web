import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { entityRoutes } from './entity.routing';

import { LeagueService } from './_services/league.service'
import { PlayerService } from './_services/player.service'
import { SportCategoryService }  from './_services/sport-category.service'
import { TeamService }  from './_services/team.service'
import { EventService }  from './_services/event.service'

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
import { CommentsListComponent } from './comment/comments-list/comments-list.component';
import { CommentDetailsComponent } from './comment/comment-details/comment-details.component';

@NgModule({
  declarations: [
    LeagueComponent,
    LeaguesComponent,
    PlayerComponent,
    PlayersComponent,
    SportCategoryComponent,
    SportCategoriesComponent,
    TeamComponent,
    TeamsComponent,
    MeetingComponent,
    MeetingsComponent,
    EventComponent,
    EventsComponent,
    CommentsListComponent,
    CommentDetailsComponent],
  imports: [
    HttpModule,
    CommonModule,
    RouterModule.forChild(entityRoutes),
  ],
  providers: [
    LeagueService,
    PlayerService,
    SportCategoryService,
    TeamService,
    EventService
  ]
})

export class EntityModule { }
