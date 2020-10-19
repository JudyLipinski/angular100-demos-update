import { Component} from '@angular/core';

@Component({
  selector: 'app-safe-nav',
  template: `<h2>Safe</h2>
  <p>Is {{somePerson?.name}} here?</p>`,
})
export class SafeNavComponent {
  somePerson: any;
}
