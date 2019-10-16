import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { MainService }  from '../_services/main.service'

@Component({
  selector: 'app-sport-categories',
  templateUrl: './sport-categories.component.html',
  styleUrls: ['./sport-categories.component.scss']
})
export class SportCategoriesComponent implements OnInit {
  categories: any = [];
  category: any = {};

  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  constructor(
    private mainService: MainService,
    private modal: NgbModal,
    private router: Router
  ) {}

  newCategory() {
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  onSubmitNew() {
    this.mainService.newEntity('sportCategory', this.category).then(res => {
      console.log(res);
      this.router.navigate(['/manage/sport_categories']);
    });
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
    this.mainService.getSportCategories().then(categories => {
      this.categories = categories;
    });
  }
}
