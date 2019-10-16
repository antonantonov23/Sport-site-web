import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss']
})
export class CommentsListComponent implements OnInit {
  @Input() comments: any = [];

  constructor() { }

  ngOnInit() {
    this.comments = [];
  }
}
