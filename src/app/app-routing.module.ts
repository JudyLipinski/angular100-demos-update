import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TemplateDrivenFormComponent } from "./forms/template-driven-form.component";
import { ReactiveFormComponent } from "./forms/reactive-form.component";
import {TemplateSignupComponent} from "./forms/template-signup.component"
import {ReactiveLoginFormComponent} from "./forms/reactive-login-form.component"

const routes: Routes = [
  { path: "template-form", component: TemplateDrivenFormComponent },
  { path: "reactive-form", component: ReactiveFormComponent },
  { path: "reactive-signup-form", component: ReactiveLoginFormComponent },
  { path: "template-signup-form", component: TemplateSignupComponent },

  { path: "", redirectTo: "/template-form", pathMatch: "full" },
  { path: "**", redirectTo: "/template-form" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
