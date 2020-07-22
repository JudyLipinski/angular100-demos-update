import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPeopleComponent } from './special-people.component';

describe('SpecialPeopleComponent', () => {
  let component: SpecialPeopleComponent;
  let fixture: ComponentFixture<SpecialPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
