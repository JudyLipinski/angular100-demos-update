import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetYearComponent } from './set-year/set-year.component';
import { SayHelloComponent } from './say-hello/say-hello.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { NoSideEffectsComponent } from './data-binding/no-side-effects.component';
import { SafeNavComponent } from './safe-nav/safe-nav.component';
import { UnsafeNavComponent } from './safe-nav/unsafe-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SetYearComponent,
    SayHelloComponent,
    DataBindingComponent,
    PropertyBindingComponent,
    NoSideEffectsComponent,
    SafeNavComponent,
    UnsafeNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
