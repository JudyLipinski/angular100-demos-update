import { Component } from '@angular/core';

@Component({
  selector: 'app-set-year',
  templateUrl: './set-year.component.html',
  styleUrls: ['./set-year.component.css']
})
export class SetYearConstructorComponent {
  title = 'angular10-demos';
  isValid = true;
  theYear: number;

  constructor() {
    this.theYear = new Date().getFullYear();
   }
}

