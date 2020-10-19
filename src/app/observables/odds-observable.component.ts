import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-odds-observable',
  template: `<hr /><h2>Odds Observable</h2>
              <p>Click and watch for error. Try again and click twice</p>
              <button (click)="getObservableData()">Subscribe</button>
              {{ numbers }}`
})
export class OddsObservableComponent implements OnInit {

  numbers = [];
  subscription: Subscription;

  oddsObservable: Observable<number>;

  ngOnInit(): void {
    this.oddsObservable =
      new Observable((observer) => {
        let oddNumber = 1;
        setInterval(() => {
          if (oddNumber > 3) {
            observer.error('Thrown from Observable');
          }
          observer.next(oddNumber);
          oddNumber += 2;
        }, 1000);
      });
  }

  getObservableData(): void {
    this.subscription = this.oddsObservable
      .subscribe({
        // nextHandler
        next: (val) => {
          this.numbers = [...this.numbers, val];
          console.log(val);
        },

        // errorHandler
        error: (error) => { alert('An error occurred ' + error); },

        // completeHandler
        complete: () => { console.log('called when complete'); },
      });
  }

}
