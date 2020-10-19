import { Component, OnInit } from "@angular/core";
import { Person, RestrictedPerson } from "./shared/models/person.model";

@Component({
  selector: "app-root",
  template: `
    <p>Name: {{ person.name }}</p>
    <p>Email: {{ person.email }}</p>
    <p>Age: {{ person.age }}</p>
    <h2>Restricted Person</h2>
    <p>Age {{restrictedPerson.age}}</p>
    <app-property-binding></app-property-binding>
    <app-no-side-effects></app-no-side-effects>
    <app-safe-nav></app-safe-nav>
    <!-- <app-unsafe-nav></app-unsafe-nav> -->
  `
})
export class AppComponent implements OnInit {
  person: Person;
  restrictedPerson: RestrictedPerson;

  ngOnInit(): void {
    this.person = {
      name: "Jane",
      email: "alias@nbc.com",
      age: 34
    };

    this.restrictedPerson = { ...this.person, age: 21 };
  }
}

