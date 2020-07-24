import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-template-signup",
  templateUrl: "./template-signup.component.html",
  styles: []
})
export class TemplateSignupComponent {
  username: string = this.generateUniqueUserID();
  email = "";

  register(form: NgForm) {
    console.log(form.value.username);
    console.log(this.username);
    // ...
  }

  generateUniqueUserID() {
    return "User123";
  }
}
