import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesExampleComponent } from './observables-example.component';
import { EvensObservableComponent } from './evens-observable.component';
import { OperatorsObservableComponent } from './operators-observable.component';
import { SimpleObservableComponent } from './simple-observable.component';
import { OddsObservableComponent } from './odds-observable.component';

import { ObservablesRoutingModule } from './observables-routing.module';

@NgModule({
  declarations: [ObservablesExampleComponent, EvensObservableComponent,
    OperatorsObservableComponent, SimpleObservableComponent, OddsObservableComponent, ObservablesExampleComponent],
  imports: [
    CommonModule, ObservablesRoutingModule
  ]
})
export class ObservablesModule { }
