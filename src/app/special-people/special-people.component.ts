import { Component, OnInit } from "@angular/core";
import { SpecialPeopleService } from "../shared/specialpeople.service";
import { Person } from "../shared/models/person.model";

@Component({
  selector: "app-special-people",
  templateUrl: "./special-people.component.html",
  styleUrls: ["./special-people.component.css"],
  providers: [SpecialPeopleService]
})
export class SpecialPeopleComponent implements OnInit {
  people: Person[];
  constructor(private service: SpecialPeopleService) {}

  ngOnInit() {
    this.people = this.service.getPeople();
  }
}
