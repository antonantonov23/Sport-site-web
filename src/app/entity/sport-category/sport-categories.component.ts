import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SportCategory }        from '../../_models/sport-category';
import { SportCategoryService } from '../_services/sport-category.service'

@Component({
  selector: 'app-sport-categories',
  templateUrl: './sport-categories.component.html',
  styleUrls: ['./sport-category.component.scss']
})

export class SportCategoriesComponent implements OnInit {
  categories: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sportCategoryService: SportCategoryService,
  ) { }

  imageSrc(cat) {
    return "assets/cat/" +  cat + ".jpeg";
  }

  getSportCategories() {
    this.sportCategoryService.getSportCategories().then(categories => {
      this.categories = categories;
    });
  }

  ngOnInit() {
    this.getSportCategories();
  }
}
