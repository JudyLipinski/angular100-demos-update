import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <h1>Welcome to {{ title }} in {{ theYear }}</h1>
        <p>Next year is {{ 1 + theYear }}</p>
    `,
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    // literals dont need types
    title = 'angular100-demos';
    isTrue = true;

    // use types with variables initialized in ngOnInit
    theYear: number;

    ngOnInit(): void {
        this.theYear = new Date().getFullYear();
    }
}
