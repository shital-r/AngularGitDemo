import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormbuilderComponent } from './signup-formbuilder.component';

describe('SignupFormbuilderComponent', () => {
  let component: SignupFormbuilderComponent;
  let fixture: ComponentFixture<SignupFormbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFormbuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupFormbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
