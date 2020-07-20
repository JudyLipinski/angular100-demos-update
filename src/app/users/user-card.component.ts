import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html'
})
export class UserCardComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  userClicked: EventEmitter<string> = new EventEmitter<string>();

  clickPerson() {
    this.userClicked.emit(this.user.first_name);
  }

  constructor() { }

  ngOnInit() { }

}
