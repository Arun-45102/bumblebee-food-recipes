import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientsComponent } from './ingredients.component';
import { IngredientdetailsComponent } from './ingredientdetails/ingredientdetails.component';
import { AllingredientresultsComponent } from './allingredientresults/allingredientresults.component';

const routes: Routes = [
  {
    path: '',
    component: IngredientsComponent,
  },
  {
    path: 'ingredientdetails/:id',
    component: IngredientdetailsComponent,
  },
  {
    path: 'allingredientresults',
    component: AllingredientresultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngredientsRoutingModule {}
