import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-evens-observable',
  templateUrl: './evens-observable.component.html',
  styleUrls: ['./evens-observable.component.css']
})
export class EvensObservableComponent implements OnInit, OnDestroy {
  numbers = [];
  subscription: Subscription;
  evensObservable: Observable<number>;

  ngOnInit() {
    this.evensObservable =
      Observable.create((observer) => {
        let evenNumber = 0;
        setInterval(() => {
          observer.next(evenNumber += 2);
        }, 1000);
      });
  }

  subscribeWithReset() {
    if (this.subscription) {
      this.unsubscribe();
      this.numbers = [];
    }
    this.doSubscribe();

  }

  doSubscribe() {
    this.subscription = this.evensObservable
    .subscribe(
      { next: (val) => {
          this.numbers = [...this.numbers, val];
          console.log(val); }
     });
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
