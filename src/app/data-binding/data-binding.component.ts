import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: `<h1>Welcome to {{title}}></h1>
                <p>The year is {{theYear}}</p>`,
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  title = 'angular10-demos';
  isValid = true;
  theYear = 2019;
}
