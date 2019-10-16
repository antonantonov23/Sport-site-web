import { Component }             from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-subnavigation',
  templateUrl: './subnavigation.component.html',
  styleUrls: ['subnavigation.component.scss']
})

export class SubnavigationComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

}
