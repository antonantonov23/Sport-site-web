import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
   ) { }

  ngOnInit() {
    document.body.classList.add("bg-7");
  }

  ngOnDestroy() {
    document.body.classList.remove("bg-7");
  }

  onSubmit() {
    this.authenticationService.login(this.user.email, this.user.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.log("ERROR");
        }
      );}
}
