import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../_guards/auth.guard';
import { UserComponent } from './user/user.component';

export const userRoutes: Routes = [ {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'profile',            component: UserComponent },
      // { path: 'users/:id/edit',     component: UserComponent },
      { path: 'users/:id',          component: UserComponent },
      { path: 'users',              component: UserComponent },
    ]
  }
];
