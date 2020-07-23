import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { ProductListComponent } from './products/list/product-list.component';
import { UserListComponent } from './users/user-list/user-list.component';
// import { ObservablesExampleComponent } from './observables/observables-example.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "users", component: UserListComponent },

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

