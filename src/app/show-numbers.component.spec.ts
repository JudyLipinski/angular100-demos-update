import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNumbersComponent } from './show-numbers.component';

describe('ShowNumbersComponent', () => {
  let component: ShowNumbersComponent;
  let fixture: ComponentFixture<ShowNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
