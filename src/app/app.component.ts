import { Component, OnInit } from "@angular/core";
import { PeopleService } from "./shared/people.service";
import { Person } from "./shared/models/person.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  people$: Observable<Person[]>;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.people$ = this.peopleService.getPeople();
  }
}
