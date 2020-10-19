import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetYearComponent } from './set-year.component';

describe('SetYearComponent', () => {
  let component: SetYearComponent;
  let fixture: ComponentFixture<SetYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
