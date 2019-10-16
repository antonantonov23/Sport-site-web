import { registerRoutes } from './authentication.routing';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(registerRoutes),
    FormsModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
  ]
})
export class AuthenticationModule { }