import { Component, OnInit } from "@angular/core";
import { Person, RestrictedPerson } from "./shared/models/person.model";

@Component({
  selector: "app-root",
  template: `
    <p>Name: {{ person.name }}</p>
    <p>Email: {{ person.email }}</p>
    <p>Age: {{ person.age }}</p>
    <h2>Restricted Person</h2>
    <p>Age {{restrictedPerson.age}}
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

    this.restrictedPerson = {...this.person,age:21}
  }

  someExample() {
    const notSure: any = 4;
    notSure.ifItExists(); // okay, ifItExists might exist at runtime
    notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

    const prettySure: Object = 4;
    //  prettySure.toFixed();
    // Error: Property 'toFixed' doesn't exist on type 'Object'.
  }
}
