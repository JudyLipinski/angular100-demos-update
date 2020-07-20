import { Component, OnInit } from '@angular/core';

const userdata = require('../data/users.json');

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {
  userArray: any[];

  ngOnInit() {
    this.userArray = userdata.users;
  }

  parentFunctionHandler(name) {
    alert(`You sent ${name} up to list from child`);
  }

}
