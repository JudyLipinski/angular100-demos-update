import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetYearComponent } from './set-year/set-year.component';
import { SayHelloComponent } from './say-hello/say-hello.component';

@NgModule({
  declarations: [
    AppComponent,
    SetYearComponent,
    SayHelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
