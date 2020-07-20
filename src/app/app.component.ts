import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <p>Is {{ somePerson?.name }} here?</p>
  `,
    styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  somePerson: any;
}
