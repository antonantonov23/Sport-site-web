import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { switchMap } from 'rxjs/operators'

import { userRoutes } from './users-routing.module';
import { UserService }  from '../_services/user.service'

import { UserComponent } from './user/user.component';
import { UserEventsComponent } from './user-events/user-events.component';

@NgModule({
  declarations: [UserComponent, UserEventsComponent],
  imports: [
    HttpModule,
    CommonModule,
    RouterModule.forChild(userRoutes),
  ],
  providers: [UserService]
})
export class UsersModule { }
