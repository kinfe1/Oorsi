import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetCodeConfirmComponent } from './password-reset-code-confirm.component';

describe('PasswordResetCodeConfirmComponent', () => {
  let component: PasswordResetCodeConfirmComponent;
  let fixture: ComponentFixture<PasswordResetCodeConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordResetCodeConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetCodeConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
