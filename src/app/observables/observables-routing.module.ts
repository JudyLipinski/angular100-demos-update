import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservablesExampleComponent } from './observables-example.component';


const routes: Routes = [
  {
    path: '',
    component: ObservablesExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule { }
