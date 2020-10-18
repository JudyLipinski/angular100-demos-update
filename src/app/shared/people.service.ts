import { Injectable } from "@angular/core";
import { Person } from "./models/person.model";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { environment} from "src/environments/environment";


@Injectable({
  providedIn: "root"
})
export class PeopleService {
  private port = environment.apiPort;
  url = `http://localhost:${this.port}/people`;

  constructor(private http: HttpClient) {

  }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url);
  }
}
