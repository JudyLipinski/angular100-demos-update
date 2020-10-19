import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  template: `
  <div class="container">
      <div class="card-deck">
        <app-person [name]="peopleArray[0]"></app-person>
        <app-person [name]="peopleArray[1]"></app-person>
        <app-person [name]="peopleArray[2]"></app-person>
      </div>
    </div>
  `
})
export class PeopleListComponent implements OnInit {

  peopleArray: any[];

  constructor() { }

  ngOnInit(): void {
    this.peopleArray = ['April', 'May', 'June'];
  }

}
