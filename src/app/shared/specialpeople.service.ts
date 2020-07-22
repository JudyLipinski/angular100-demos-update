import { Injectable } from "@angular/core";
import { Person } from "./models/person.model";
import { Logging } from "./logging.service";

@Injectable({
  providedIn: "root"
})
export class SpecialPeopleService {
  getPeople(): Person[] {
    return [
      {
        id: 1,
        first_name: "Bengt",
        last_name: "Wankel",
        email: "bwankel9@upenn.edu",
        gender: "Male",
        avatar:
          "https://robohash.org/distinctioquasiomnis.png?size=100x100&set=set1",
        img: "male2.png"
      },
      {
        id: 11,
        first_name: "Aubine",
        last_name: "Spellacy",
        email: "aspellacya@seattletimes.com",
        gender: "Female",
        avatar:
          "https://robohash.org/inciduntsitautem.png?size=100x100&set=set1",
        img: "female2.png"
      }
    ];
  }
}
