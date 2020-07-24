import { Component, OnInit } from "@angular/core";
import {
  FormControl, Validators, FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: "app-reactive-login-form",
  templateUrl: "./reactive-login-form.component.html",
  styleUrls: ["./reactive-login-form.component.css"]
})
export class ReactiveLoginFormComponent {
  username = new FormControl("", [
    Validators.required,
    Validators.minLength(5)
  ]);

  password = new FormControl("", [Validators.required]);

  loginForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password
  });

  constructor(private builder: FormBuilder) {}

  login() {
    console.log(this.loginForm.value);
    // Attempt Logging in...
  }
}
