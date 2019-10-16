import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
   ) { }

  ngOnInit() {
    console.log("NG ON INIT LOGIN");
  }

  onSubmit() {
    this.authenticationService.login(this.user.fullName, this.user.email, this.user.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/manage/users']);
        },
        error => {
          console.log("ERROR");
        }
      );}
}
