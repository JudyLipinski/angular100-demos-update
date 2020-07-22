import { Injectable } from "@angular/core";
import { Person } from "./models/person.model";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class PeopleService {
  url = "http://localhost:5566/people";

  constructor(private http: HttpClient) {

  }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }
}
