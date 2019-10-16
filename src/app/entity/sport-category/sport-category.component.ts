import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SportCategory }        from '../../_models/sport-category';
import { SportCategoryService } from '../_services/sport-category.service'

@Component({
  selector: 'app-sport-category',
  templateUrl: './sport-category.component.html',
  styleUrls: ['./sport-category.component.scss']
})

export class SportCategoryComponent implements OnInit {
  category: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: SportCategoryService,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.categoryService.getSportCategory(id)
      .then(category => this.category = category);
  }
}