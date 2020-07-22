import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-show-numbers",
  template: `
    <p>{{ numbers }}</p>
  `
})
export class ShowNumbersComponent implements OnInit, OnDestroy {
  numbers: number[];
  currentTimeInMillis = new Date().getMilliseconds();
  intervalID: any;

  ngOnInit(): void {
    this.numbers = [1, 2, 3];

    this.intervalID = setInterval(() => {
      //UPDATES SCREEN
      this.numbers = [...this.numbers, Math.floor(Math.random() * 10)];

      //DOES NOT UPDATE SCREEN
      // this.numbers.push(Math.floor(Math.random() * 10));

      console.log(
        `Started at ${this.currentTimeInMillis} array= ${this.numbers}`
      );
    }, 1000);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    // clearInterval(this.intervalID);
  }
}
