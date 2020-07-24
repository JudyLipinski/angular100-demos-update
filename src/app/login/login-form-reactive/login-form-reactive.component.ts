import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/authentication.service';

@Component({
  selector: 'app-login-form-reactive',
  templateUrl: './login-form-reactive.component.html',
  styleUrls: ['./login-form-reactive.component.css']
})
export class LoginFormReactiveComponent {

  loginForm: FormGroup;
  isSubmitted = false;
  isInvalidCredentials = false;

  // makes it easier to access form control values from within template
  get formControls() { return this.loginForm.controls; }

  username = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);

  constructor(private authService: AuthenticationService,
    private router: Router, formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      "username": this.username,
      "password": this.password
    });
  }

  onSubmitReactBased() {
    if (this.authService.login(this.username.value, this.password.value)) {
      this.isInvalidCredentials = false;
      if (!this.authService.redirectUrl) {
        this.authService.redirectUrl = '/home';
      }
      this.router.navigateByUrl(this.authService.redirectUrl);
    }
    else {
      this.isInvalidCredentials = true;
    }

  }

}
