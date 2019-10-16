import { Injectable }          from '@angular/core';
import { Router, CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }

    this.router.navigate(['/session/login']);
    return false;
  }

  canActivateChild() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }

    this.router.navigate(['/session/login']);
    return false;
  }
}
