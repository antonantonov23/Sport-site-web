import { Component, OnInit } from '@angular/core';

import { User }        from '../../_models/user';
import { UserService }  from '../../_services/user.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: any = {};

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe( res => {
      this.user = res;
    });
  }
}
