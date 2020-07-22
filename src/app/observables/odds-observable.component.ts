import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-odds-observable',
  template: ` <hr /><h2>Odds Observable</h2>
  <button (click)="getObservableData()">Subscribe</button>
  {{ numbers }}`
})
export class OddsObservableComponent implements OnInit, OnDestroy {

  numbers = [];
  subscription: Subscription;

  oddsObservable: Observable<number>;

  ngOnInit() {
    this.oddsObservable =
      Observable.create((observer) => {
        let oddNumber = 1;
        setInterval(() => {
          if (oddNumber > 3) {
            observer.error('Thrown from Observable')
          }
          observer.next(oddNumber);
          oddNumber += 2;
        }, 1000);
      });
  }

  getObservableData() {
    this.subscription = this.oddsObservable
      .subscribe(
        val => {
          this.numbers = [...this.numbers, val];
          console.log(val);
        },
        error => { alert('An error occured ' + error); }
      );
  }

  unsubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
