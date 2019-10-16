import { appRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthenticationService } from './_services/authentication.service';
import { NavigationComponent } from './navigation/navigation.component';
import { SubnavigationComponent } from './subnavigation/subnavigation.component';
import { AuthGuard } from './_guards/auth.guard';
import { CalendarBaseModule } from './calendar/calendar_base.module';
import { EntityModule } from './entity/entity.module';
import { UsersModule } from './users/users.module';
import { StaticModule } from './static/static.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    SubnavigationComponent,
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouting),
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CalendarBaseModule,
    EntityModule,
    UsersModule,
    StaticModule
  ],
  providers: [
    AuthenticationService,
    HttpClient,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }