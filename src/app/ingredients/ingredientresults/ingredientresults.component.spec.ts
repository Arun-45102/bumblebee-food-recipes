import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientresultsComponent } from './ingredientresults.component';

describe('IngredientresultsComponent', () => {
  let component: IngredientresultsComponent;
  let fixture: ComponentFixture<IngredientresultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientresultsComponent]
    });
    fixture = TestBed.createComponent(IngredientresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
