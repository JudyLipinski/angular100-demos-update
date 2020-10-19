import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//#region hide imports of components
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list.component';
import { UserListComponent } from './users/user-list.component';
import { ObservablesExampleComponent } from './observables/observables-example.component';
//#endregion

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "users", component: UserListComponent },
  { path: "products", component: ProductListComponent },
  { path: "observables", component: ObservablesExampleComponent },
  { path: "**", redirectTo: "/users" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// { path: "users/:id", component: PersonDetailComponent },
