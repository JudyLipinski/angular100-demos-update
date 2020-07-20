import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ numbers }}</p>
  `
})
export class AppComponent implements OnInit {
  numbers: number[];

  ngOnInit(): void {
    this.numbers = [1, 2, 3];

    const timerId = setInterval(() => {
      this.numbers.push(Math.floor(Math.random() * 10));
      console.log(this.numbers);
    }, 1000);

    setTimeout(() => {
      clearInterval(timerId);
    }, 4000);
  }
}

