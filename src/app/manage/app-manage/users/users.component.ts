import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MainService }  from '../_services/main.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users: any = [];
  user: any = {};

  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  constructor(
    private mainService: MainService,
    private modal: NgbModal,
    private router: Router
  ) {}

  newPlayer() {
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  editEntity() {
    alert('Coming soon');
  }

  deleteEntity() {
    const playerId = 1;

    if (confirm('Are you sure you want to delete the entity?')) {
      this.mainService.destroyEntity('players', playerId);
      this.router.navigate(['/manage/players']);
    }
  }


  ngOnInit() {
    this.mainService.getUsers().then(users => {
      this.users = users;
    });
  }

  newUser() {
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  onSubmitNew() {
    this.mainService.newEntity('account', this.user).then(users => {
      console.log(users);
      this.router.navigate(['/manage/users']);
    });
  }
}
