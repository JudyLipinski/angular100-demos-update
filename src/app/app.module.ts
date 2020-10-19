import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonComponent } from './data/person.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductRowComponent } from './products/product-row.component';
import { UserListComponent } from './users/user-list.component';
import { UserCardComponent } from './users/user-card.component';
import { UserTableComponent } from './users/user-table.component';
import { UserRowComponent } from './users/user-row.component';
import { NgCodeExamplesComponent } from './ng-code-examples/ng-code-examples.component';
import { TemperatureConverterPipe } from './temperature/temperature-converter.pipe';
import { TempExampleComponent } from './temperature/temp-example.component';
import { ShowNumbersComponent } from './show-numbers.component';
import { ObservablesExampleComponent } from './observables/observables-example.component';
import { EvensObservableComponent } from './observables/evens-observable.component';
import { FromObservableComponent } from './observables/from-observable.component';
import { OddsObservableComponent } from './observables/odds-observable.component';
import { OperatorsObservableComponent } from './observables/operators-observable.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [AppComponent, PeopleListComponent, PersonComponent, ProductListComponent, ProductRowComponent,UserListComponent, UserCardComponent, UserTableComponent, UserRowComponent, NgCodeExamplesComponent,TemperatureConverterPipe, TempExampleComponent, ShowNumbersComponent, FromObservableComponent, ObservablesExampleComponent, EvensObservableComponent, OddsObservableComponent, OperatorsObservableComponent,HomeComponent, NavbarComponent, NotfoundComponent, ContactComponent, FooterComponent],

  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
