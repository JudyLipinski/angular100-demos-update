import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../users/shared/user.service';
import { User } from '../users/model/user';
import {  tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: User;

  constructor(private activatedRoute: ActivatedRoute, private service: UserService) {}

  ngOnInit() {
    const id = +this.activatedRoute.parent.snapshot.paramMap.get('id');
    this.service.getUser(id)
    // .pipe(tap(v => console.log(v))
    .subscribe((user) => this.user = user);
  }

}
