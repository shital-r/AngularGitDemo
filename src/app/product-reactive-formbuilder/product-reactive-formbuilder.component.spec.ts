import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReactiveFormbuilderComponent } from './product-reactive-formbuilder.component';

describe('ProductReactiveFormbuilderComponent', () => {
  let component: ProductReactiveFormbuilderComponent;
  let fixture: ComponentFixture<ProductReactiveFormbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReactiveFormbuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReactiveFormbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
