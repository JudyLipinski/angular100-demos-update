import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TemplateDrivenFormComponent } from "./forms/template-driven-form.component";
import { ReactiveFormComponent } from "./forms/reactive-form.component";
import {TemplateSignupComponent} from "./forms/template-signup.component";
import {ReactiveLoginFormComponent} from "./forms/reactive-login-form.component";
import { LoginComponent } from './login/login.component';
import { LoginFormTemplateComponent } from './login/login-form-template/login-form-template.component';
import { LoginFormReactiveComponent } from './login/login-form-reactive/login-form-reactive.component';
import { RegisterFormReactiveComponent } from './login/register-form-reactive/register-form-reactive.component';


const routes: Routes = [
  { path: "", redirectTo: "/template-form", pathMatch: "full" },

  { path: "template-form", component: TemplateDrivenFormComponent },
  { path: "reactive-form", component: ReactiveFormComponent },
  { path: "reactive-signup-form", component: ReactiveLoginFormComponent },
  { path: "template-signup-form", component: TemplateSignupComponent },

  { path: "login",
  component: LoginComponent,
  children: [
    { path: 'loginTemplate', component: LoginFormTemplateComponent },
    { path: 'loginReactive', component: LoginFormReactiveComponent },
    { path: 'registerReactive', component: RegisterFormReactiveComponent },


  ],
},

  { path: "**", redirectTo: "/template-form" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
