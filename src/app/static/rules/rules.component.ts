import { Component, OnInit }             from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './rules.component.html',
  styleUrls: ['rules.component.scss']
})
export class RulesComponent implements OnInit {
  cat = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  setCat() {
    const category = this.route.snapshot.paramMap.get('category');

    this.cat = category;
    this.ngOnInit();
  }

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('category');

    this.cat = category;
  }
}

@Component({
  selector: 'football-rules',
  templateUrl: './football.component.html',
  styleUrls: ['./rules.component.scss']
})
export class FootballRulesComponent {

  constructor() {}
}

@Component({
  selector: 'basketball-rules',
  templateUrl: './basketball.component.html',
  styleUrls: ['./rules.component.scss']
})
export class BasketballRulesComponent {

  constructor() {}
}

@Component({
  selector: 'box-rules',
  templateUrl: './box.component.html',
  styleUrls: ['./rules.component.scss']
})
export class BoxRulesComponent {

  constructor() {}
}

@Component({
  selector: 'chess-rules',
  templateUrl: './chess.component.html',
  styleUrls: ['./rules.component.scss']
})
export class ChessRulesComponent {

  constructor() {}
}

@Component({
  selector: 'formula1-rules',
  templateUrl: './formula1.component.html',
  styleUrls: ['./rules.component.scss']
})
export class Formula1RulesComponent {

  constructor() {}
}

@Component({
  selector: 'rhythmic_gymnastics-rules',
  templateUrl: './rhythmic_gymnastics.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RhythmicGymnasticsRulesComponent {

  constructor() {}
}

@Component({
  selector: 'volleyball-rules',
  templateUrl: './volleyball.component.html',
  styleUrls: ['./rules.component.scss']
})
export class VolleyballRulesComponent {

  constructor() {}
}

@Component({
  selector: 'tennis-rules',
  templateUrl: './tennis.component.html',
  styleUrls: ['./rules.component.scss']
})
export class TennisRulesComponent {

  constructor() {}
}

@Component({
  selector: 'poker-rules',
  templateUrl: './poker.component.html',
  styleUrls: ['./rules.component.scss']
})
export class PokerRulesComponent {

  constructor() {}
}