import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserRowComponent } from './user-row/user-row.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserLoginComponent } from '../user/user-login.component';
import { UserEditComponent } from '../user/user-edit.component';


@NgModule({
 declarations: [UserListComponent,
                UserCardComponent,
                UserTableComponent,
                UserRowComponent,
                UserDetailComponent,
                UserLoginComponent,
                UserEditComponent],
 imports: [
   CommonModule, RouterModule
 ]
})
export class UsersModule { }

