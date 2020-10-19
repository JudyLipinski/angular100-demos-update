import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "users",
    component: UserListComponent,
    canActivate: [AuthGuard],

  },

  {
    path: "users/:id", component: UserDetailComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'logindetails', component: UserLoginComponent },
      { path: 'edit', component: UserEditComponent }
    ],
  },

  {
    path: "products", //Angular 8 Notation with Promise
    loadChildren: () => import('./products/products.module')
      .then(mod => {
        console.log('in promise loadChildren');
        return mod.ProductsModule;
      }),
  },

  {
    path: "observables",
    loadChildren: () => import('./observables/observables.module')
      .then(mod => {
        console.log('in promise loadChildren');
        return mod.ObservablesModule;
      }),
  },

  //Before Angular 8 -DEPRECATED - REMOVED IN NG 10
  //loadChildren: './observables/observables.module#ObservablesModule' },


  { path: "**", redirectTo: "/users" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

