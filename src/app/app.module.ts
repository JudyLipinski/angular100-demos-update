import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonComponent } from './data/person.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductRowComponent } from './products/product-row.component';
import { UserListComponent } from './users/user-list.component';
import { UserCardComponent } from './users/user-card.component';
import { UserTableComponent } from './users/user-table.component';
import { UserRowComponent } from './users/user-row.component';


@NgModule({
  declarations: [AppComponent, PeopleListComponent, PersonComponent, ProductListComponent, ProductRowComponent,UserListComponent, UserCardComponent, UserTableComponent, UserRowComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
