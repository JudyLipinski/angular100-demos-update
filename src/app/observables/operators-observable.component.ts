import { Component, OnInit, OnDestroy } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import { NumbersService } from '../shared/numbers.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-operators-observable',
  template: ` <hr /><h2>Numbers Observable with Operators</h2>
  <button (click)="getNegativeMultiplesOfThree()">Get Multiples Of Three Doubled</button>
  <button *ngIf="isStarted" (click)="unsubscribe()">Stop</button>
  {{ numbers }}`
})
export class OperatorsObservableComponent implements OnDestroy {
  isStarted = false;
  numbers: number[] = [];
  subscription: Subscription;
  oddsObservable: Observable<number>;

  constructor(private numberService: NumbersService) { }

  getNegativeMultiplesOfThree() {
    this.isStarted = true;
    this.numbers = [];
    this.subscription = this.numberService.getNumberObservable()
      .pipe(
        tap(v => console.log(`Received value of ${v}`)),
        filter(v => (v % 3 === 0)),
        map(v => v * -1)
      )
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
    this.isStarted = false;

  }

  ngOnDestroy() {
    this.unsubscribe();
  }

}
