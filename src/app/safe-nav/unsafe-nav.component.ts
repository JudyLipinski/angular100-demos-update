import { Component  } from '@angular/core';

@Component({
  selector: 'app-unsafe-nav',
  template: `<h2>Unsafe</h2>
    <p>Is {{somePerson.name}} here?</p>`
})
export class UnsafeNavComponent  {
  somePerson: any;
}
