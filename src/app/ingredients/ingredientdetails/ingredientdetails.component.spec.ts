import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientdetailsComponent } from './ingredientdetails.component';

describe('IngredientdetailsComponent', () => {
  let component: IngredientdetailsComponent;
  let fixture: ComponentFixture<IngredientdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientdetailsComponent]
    });
    fixture = TestBed.createComponent(IngredientdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
