import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-manage-navigation',
  templateUrl: './manage-navigation.component.html',
  styleUrls: ['./manage-navigation.component.scss']
})
export class ManageNavigationComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
   ) { }

  currentAdminUserPresent() {
    if (this.authenticationService.currentAdmin()) {
      return true;
    }

    return false;
  }

  ngOnInit() {
  }

  logout() {
    if (confirm('Are you sure you want to logout?')) {
      this.authenticationService.logout();
      this.router.navigate(['/manage/login']);
    }
  }

}
