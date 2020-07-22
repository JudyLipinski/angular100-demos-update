import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-from-operator',
  template: `<button (click)="getData()">Start Subscribe</button>
            {{numbers}}
            `
})
export class SimpleObservableComponent {
  numbers = [];
  // emit number values when subscribed to
  arraySource: Observable<number> = from([1, 2, 3, 4]);

  getData() {
    // when clicked, this function subscribes, values added to array
    this.arraySource.subscribe(values => (this.numbers = [...this.numbers, values]));
  }
}


