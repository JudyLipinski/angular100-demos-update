import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormTemplateComponent } from './login-form-template.component';

describe('LoginFormTemplateComponent', () => {
  let component: LoginFormTemplateComponent;
  let fixture: ComponentFixture<LoginFormTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
