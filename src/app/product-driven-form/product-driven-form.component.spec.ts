import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDrivenFormComponent } from './product-driven-form.component';

describe('ProductDrivenFormComponent', () => {
  let component: ProductDrivenFormComponent;
  let fixture: ComponentFixture<ProductDrivenFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDrivenFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
