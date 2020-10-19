import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-year',
  templateUrl: './set-year.component.html',
  styleUrls: ['./set-year.component.css']
})
export class SetYearComponent {
  title = 'angular10-demos';
  isValid = true;
  theYear = 2019;

}
