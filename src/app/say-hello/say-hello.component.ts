import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-say-hello',
  templateUrl: `<p>Hello, {{person.name}}>`,
  styleUrls: ['./say-hello.component.css']
})
export class SayHelloComponent implements OnInit {
  person: any;

  ngOnInit(): void {
    this.person = {name: 'Jerry', email: 'jerry@email.com'};
  }
}
