import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { RulesComponent,
         FootballRulesComponent,
         BasketballRulesComponent,
         BoxRulesComponent,
         ChessRulesComponent,
         Formula1RulesComponent,
         RhythmicGymnasticsRulesComponent,
         VolleyballRulesComponent,
         TennisRulesComponent,
         PokerRulesComponent } from './rules/rules.component'

@NgModule({
  declarations: [
    RulesComponent,
    FootballRulesComponent,
    BasketballRulesComponent,
    BoxRulesComponent,
    ChessRulesComponent,
    Formula1RulesComponent,
    RhythmicGymnasticsRulesComponent,
    VolleyballRulesComponent,
    TennisRulesComponent,
    PokerRulesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClient
  ]
})
export class StaticModule { }