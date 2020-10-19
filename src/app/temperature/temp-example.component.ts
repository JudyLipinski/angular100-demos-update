import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-example',
  templateUrl: './temp-example.component.html',
  styleUrls: ['./temp-example.component.css']
})
export class TempExampleComponent implements OnInit {

  freezingTempInCelsius = 0;

  constructor() { }

  ngOnInit() {
  }

}
