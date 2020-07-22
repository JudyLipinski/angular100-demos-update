import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserRowComponent } from './user-row/user-row.component';

@NgModule({
 declarations: [UserListComponent,
                UserCardComponent,
                UserTableComponent,
                UserRowComponent],
 imports: [
   CommonModule
 ]
})
export class UsersModule { }

