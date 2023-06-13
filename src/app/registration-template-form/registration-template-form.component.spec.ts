import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationTemplateFormComponent } from './registration-template-form.component';

describe('RegistrationTemplateFormComponent', () => {
  let component: RegistrationTemplateFormComponent;
  let fixture: ComponentFixture<RegistrationTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationTemplateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
