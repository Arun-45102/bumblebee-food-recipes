import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllreciperesultsComponent } from './allreciperesults.component';

describe('AllreciperesultsComponent', () => {
  let component: AllreciperesultsComponent;
  let fixture: ComponentFixture<AllreciperesultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllreciperesultsComponent]
    });
    fixture = TestBed.createComponent(AllreciperesultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
