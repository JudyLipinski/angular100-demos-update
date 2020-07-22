import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  getNumberObservable(): Observable<number> {
    return new Observable((observer) => {
      let evenNumber = 0;
      setInterval(() => {
        observer.next(evenNumber++);
      }, 1000);
    });

  }
}
