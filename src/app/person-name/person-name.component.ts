import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-name',
  template: `
    <p>
      person-name works!
    </p>
  `,
  styleUrls: ['./person-name.component.css']
})
export class PersonNameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
