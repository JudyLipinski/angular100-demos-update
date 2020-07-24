import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form-template',
  templateUrl: './login-form-template.component.html',
  styleUrls: ['./login-form-template.component.css']
})
export class LoginFormTemplateComponent implements OnInit {
  isInvalidCredentials = false;
  user = { username: 'defaultuser', password: 'defaultpassword' }

  ngOnInit(): void { }
  constructor(private authService: AuthenticationService,
              private router: Router) { }

  onSubmitTemplateBased(): void {
    if (this.authService.login(this.user.username, this.user.password)) {
      this.isInvalidCredentials = false;
      if (!this.authService.redirectUrl) {
        this.authService.redirectUrl = '/home';
      }
      this.router.navigateByUrl(this.authService.redirectUrl);
      // this.router.navigate(['/login']);
      // return Observable.of(false);
    }
    else {
      this.isInvalidCredentials = true;
    }

  }
}


