import { Component, OnInit } from '@angular/core';

import { MainService }  from '../_services/main.service'

@Component({
  selector: 'profile-admin',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any = {};

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getUser().subscribe( res => {
      this.user = res;
      console.log(res);
    });;
  }
}
