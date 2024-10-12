import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllreciperesultsComponent } from './allreciperesults/allreciperesults.component';
import { RecipedetailsComponent } from './recipedetails/recipedetails.component';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
  },
  {
    path: 'recipedetails/:id',
    component: RecipedetailsComponent,
  },
  {
    path: 'allreciperesults',
    component: AllreciperesultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
