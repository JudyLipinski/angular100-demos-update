import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddsObservableComponent } from './odds-observable.component';

describe('OddsObservableComponent', () => {
  let component: OddsObservableComponent;
  let fixture: ComponentFixture<OddsObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddsObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddsObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
