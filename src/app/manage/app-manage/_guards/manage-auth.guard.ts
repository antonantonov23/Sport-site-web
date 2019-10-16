import { Injectable }          from '@angular/core';
import { Router, CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class ManageAuthGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('currentAdmin')) {
      return true;
    }

    this.router.navigate(['/manage/login']);
    return false;
  }

  canActivateChild() {
    if (localStorage.getItem('currentAdmin')) {
      return true;
    }

    this.router.navigate(['/manage/login']);
    return false;
  }
}
