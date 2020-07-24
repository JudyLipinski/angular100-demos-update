import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormReactiveComponent } from './login-form-reactive.component';

describe('LoginFormReactiveComponent', () => {
  let component: LoginFormReactiveComponent;
  let fixture: ComponentFixture<LoginFormReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
