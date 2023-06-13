import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivePracticeComponent } from './reactive-practice.component';

describe('ReactivePracticeComponent', () => {
  let component: ReactivePracticeComponent;
  let fixture: ComponentFixture<ReactivePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivePracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
