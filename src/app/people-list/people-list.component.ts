import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-list',
  templateUrl: 'people-list.component.html'
})
export class PeopleListComponent implements OnInit {
  peopleArray: any[];

  ngOnInit(): void {
    this.peopleArray = ['April', 'May', 'June'];
  }

  parentFunctionHandler(name): void {
    alert(`You sent ${name} up to list from child`);
  }

}
