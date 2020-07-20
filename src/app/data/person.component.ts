import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-person',
  template: `
    <div class="card" style="width:200px;height:300px">
      <div class="card-body text-center">
        <h4 class="card-title">{{ name }}</h4>
        <button (click)="clickPerson()" class="btn btn-primary">
        See Profile</button>
      </div>
    </div>
  `
})
export class PersonComponent implements OnInit {
  @Input()
  name: string;

  @Output()
  personClicked: EventEmitter<string> = new EventEmitter<string>();

  clickPerson() {
    this.personClicked.emit(this.name);
  }

  constructor() { }

  ngOnInit() { }
}
