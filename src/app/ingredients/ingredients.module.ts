import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsComponent } from './ingredients.component';
import { IngredientdetailsComponent } from './ingredientdetails/ingredientdetails.component';
import { IngredientresultsComponent } from './ingredientresults/ingredientresults.component';
import { AllingredientresultsComponent } from './allingredientresults/allingredientresults.component';


@NgModule({
  declarations: [
    IngredientsComponent,
    IngredientdetailsComponent,
    IngredientresultsComponent,
    AllingredientresultsComponent
  ],
  imports: [
    CommonModule,
    IngredientsRoutingModule
  ]
})
export class IngredientsModule { }
