import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  template: `<div class="card" style="width:200px;height:300px">
      <div class="card-body text-center">
        <h4 class="card-title">{{ name }}</h4>
        <button (click)="clickPerson()" class="btn btn-primary">
        See Profile</button>
      </div>
    </div>
  `,
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input()
  name: string;

  clickPerson(): void {
    alert('you clicked ' + this.name);
  }

  ngOnInit(): void {
  }

}
