import { Component, OnInit } from "@angular/core";
import { PeopleService } from "./shared/people.service";
import { Person } from "./shared/models/person.model";

@Component({
  selector: "app-root",
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  people: Person[];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(
      (data: Person[]) => {
        this.people = data;
      },
      error => console.log("error occured", error)
    );
  }
}
