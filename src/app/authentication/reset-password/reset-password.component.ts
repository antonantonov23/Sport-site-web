import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  user: any = {};

  constructor() { }

  ngOnInit() {
    document.body.classList.add("bg-9");
  }

  ngOnDestroy() {
    document.body.classList.remove("bg-9");
  }

  onSubmit() {

  }
}
