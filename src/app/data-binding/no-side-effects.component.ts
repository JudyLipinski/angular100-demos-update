import { Component } from '@angular/core';

@Component({
  selector: 'app-no-side-effects',
  template: `<h2>No side effects</h2>
  <p>Next year is: {{++theYear}}</p>`
})
export class NoSideEffectsComponent {
  theYear = 2020;
}
