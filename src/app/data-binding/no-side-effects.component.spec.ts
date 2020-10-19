import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSideEffectsComponent } from './no-side-effects.component';

describe('NoSideEffectsComponent', () => {
  let component: NoSideEffectsComponent;
  let fixture: ComponentFixture<NoSideEffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSideEffectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSideEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
