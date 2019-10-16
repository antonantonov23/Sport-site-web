import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RulesComponent } from './static/rules/rules.component';

export const appRouting: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'session', loadChildren: './authentication/authentication.module#AuthenticationModule',
  },
  {
    path: '',
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'rules/:category', component: RulesComponent },
      { path: '', loadChildren: './entity/entity.module#EntityModule' },
      { path: '', loadChildren: './users/users.module#UsersModule' },
    ]
  },
  {
    path: 'manage',
    loadChildren: './manage/app-manage/app-manage.module#AppManageModule'
  }
];
