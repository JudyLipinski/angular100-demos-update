import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  template: `
    <app-person></app-person>
    <app-person></app-person>
    <app-person></app-person>
  `
})
export class PeopleListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
