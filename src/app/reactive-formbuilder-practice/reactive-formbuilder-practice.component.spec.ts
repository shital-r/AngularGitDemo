import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormbuilderPracticeComponent } from './reactive-formbuilder-practice.component';

describe('ReactiveFormbuilderPracticeComponent', () => {
  let component: ReactiveFormbuilderPracticeComponent;
  let fixture: ComponentFixture<ReactiveFormbuilderPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormbuilderPracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormbuilderPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
