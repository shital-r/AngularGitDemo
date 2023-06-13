import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrivetableComponent } from './retrivetable.component';

describe('RetrivetableComponent', () => {
  let component: RetrivetableComponent;
  let fixture: ComponentFixture<RetrivetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrivetableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrivetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
