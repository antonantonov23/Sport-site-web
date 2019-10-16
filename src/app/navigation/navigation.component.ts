import { Component }             from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../_services/authentication.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['navigation.component.scss']
})

export class NavigationComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
  ) {}

  isManageConsole() {
    return this.router.url.includes('/manage');
  }

  showNav() {
    if (!this.authService.currentUser() || this.isManageConsole()) {
      return false;
    }

    return true;
  }

  logout() {
    if (confirm('Are you sure you want to logout?')) {
      this.authService.logout();
      this.router.navigate(['/session/login']);
    }
  }

  gotoProfile() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userId = currentUser.userId;

    this.router.navigate(['/users', userId]);
  }
}
