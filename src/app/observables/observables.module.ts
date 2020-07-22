import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesExampleComponent } from './observables-list.component';
import { EvensObservableComponent } from './evens-observable.component';
import { OperatorsObservableComponent } from './operators-observable.component';
import { SimpleObservableComponent } from './simple-observable.component';
import { OddsObservableComponent } from './odds-observable.component';


@NgModule({
  declarations: [ObservablesExampleComponent, EvensObservableComponent,
    OperatorsObservableComponent, SimpleObservableComponent, OddsObservableComponent,ObservablesExampleComponent],
  imports: [
    CommonModule
  ]
})
export class ObservablesModule { }
