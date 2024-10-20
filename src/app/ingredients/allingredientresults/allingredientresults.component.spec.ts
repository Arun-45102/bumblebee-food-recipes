import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllingredientresultsComponent } from './allingredientresults.component';

describe('AllingredientresultsComponent', () => {
  let component: AllingredientresultsComponent;
  let fixture: ComponentFixture<AllingredientresultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllingredientresultsComponent]
    });
    fixture = TestBed.createComponent(AllingredientresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
