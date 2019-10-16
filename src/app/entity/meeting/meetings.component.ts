import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingsComponent implements OnInit {
  meetings: any = [];

  constructor() { }

  ngOnInit() {
  }

}
