import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciperesultsComponent } from './reciperesults.component';

describe('ReciperesultsComponent', () => {
  let component: ReciperesultsComponent;
  let fixture: ComponentFixture<ReciperesultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReciperesultsComponent]
    });
    fixture = TestBed.createComponent(ReciperesultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
