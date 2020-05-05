import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBirthdateWizardComponent } from './add-birthdate-wizard.component';

describe('AddBirthdateWizardComponent', () => {
  let component: AddBirthdateWizardComponent;
  let fixture: ComponentFixture<AddBirthdateWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBirthdateWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBirthdateWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
