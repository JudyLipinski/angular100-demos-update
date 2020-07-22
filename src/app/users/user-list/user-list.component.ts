import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {
  userArray: User[];
  showCard = true;

  constructor(private service: UserService) { }

  ngOnInit() {
    console.log('calling service');
    this.service.getUsers().subscribe(
      (data: User[]) => {
        this.userArray = data;
      },
      error => console.log("error occurred", error)

    );
  }

  parentFunctionHandler(name) {
    alert(`You sent ${name} up to list from child`);
  }

}
