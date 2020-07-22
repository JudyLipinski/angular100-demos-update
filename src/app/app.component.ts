import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <button (click)="showNumbers = !showNumbers">
      Toggle Show *ngIf for show numbers
    </button>
    <app-show-numbers *ngIf="showNumbers"></app-show-numbers>
  `
})
export class AppComponent {
  showNumbers = true;
}
