import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchTypeComponent } from './product-search-type.component';

describe('ProductSearchTypeComponent', () => {
  let component: ProductSearchTypeComponent;
  let fixture: ComponentFixture<ProductSearchTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSearchTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSearchTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
