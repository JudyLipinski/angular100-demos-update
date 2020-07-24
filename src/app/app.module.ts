import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UsersModule } from './users/users.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent,LoginComponent],
  imports: [BrowserModule,
    AppRoutingModule, HttpClientModule,
    // ObservablesModule, ProductsModule //If uncommented, would be loaded EAGERLY
    UsersModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

