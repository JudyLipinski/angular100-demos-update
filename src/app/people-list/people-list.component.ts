import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  template: `
  <div class="container">
      <div class="card-deck">
      <app-person [name]="peopleArray[0]"
    (personClicked)="parentFunctionHandler($event)"></app-person>
    <app-person [name]="peopleArray[1]"
    (personClicked)="parentFunctionHandler($event)"></app-person>
    <app-person [name]="peopleArray[2]"
    (personClicked)="parentFunctionHandler($event)"></app-person>

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

    parentFunctionHandler(name): void {
      alert(`You sent ${name} up to list from child`);
  }

  }
