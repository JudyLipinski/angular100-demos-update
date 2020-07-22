import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsObservableComponent } from './operators-observable.component';

describe('OperatorsObservableComponent', () => {
  let component: OperatorsObservableComponent;
  let fixture: ComponentFixture<OperatorsObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorsObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorsObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
