import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-from-operator',
  template: `<button (click)="getData()">Call Subscribe</button>{{numbers}}`
})
export class FromObservableComponent {
  numbers = [];
  // emit number values, one at a time, when subscribed to
  arraySource: Observable<number> = from([1, 2, 3, 4]);

  getData() {
    // when clicked, this function subscribes, values added to array
    // this.arraySource.subscribe(emittedValue => {
    //   console.log(`values`, emittedValue);
    //   (this.numbers = [...this.numbers, emittedValue]);
    // });

    this.arraySource.subscribe(
     {
       // nextHandler
       next: (emittedValue) => {
        console.log(`values`, emittedValue);
        (this.numbers = [...this.numbers, emittedValue]); },

        // errorHandler
        error: () => { console.log('called if error'); },

         // completeHandler
         complete: () => { console.log('called when complete'); },
    });
  }

}


