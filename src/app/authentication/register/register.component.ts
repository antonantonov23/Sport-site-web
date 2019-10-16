import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
   ) { }

  ngOnInit() {
    document.body.classList.add("bg-2");
  }

  ngOnDestroy() {
    document.body.classList.remove("bg-2");
  }

  onSubmit() {
    this.authenticationService.register(this.user.fullName, this.user.password, this.user.email)
      .pipe(first())
      .subscribe();
    this.router.navigate(['/session/login']);
  }
}
