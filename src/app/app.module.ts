import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UsersModule } from './users/users.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from "./forms/template-driven-form.component";
import { ReactiveFormComponent } from "./forms/reactive-form.component";

import { TemplateSignupComponent } from './forms/template-signup.component';
import { ReactiveLoginFormComponent } from './forms/reactive-login-form.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent,LoginComponent,  TemplateDrivenFormComponent,
    ReactiveFormComponent,
    TemplateSignupComponent,
    ReactiveLoginFormComponent],
  imports: [BrowserModule,
    AppRoutingModule, HttpClientModule,
    // ObservablesModule, ProductsModule //If uncommented, would be loaded EAGERLY
    UsersModule, FormsModule, ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

