import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCodeExamplesComponent } from './ng-code-examples.component';

describe('NgCodeExamplesComponent', () => {
  let component: NgCodeExamplesComponent;
  let fixture: ComponentFixture<NgCodeExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCodeExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCodeExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
