import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'register',
    title: 'Register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./recipes/recipes.module').then((recipe) => recipe.RecipesModule),
    canActivate: [authGuard],
  },
  {
    path: 'ingredients',
    loadChildren: () =>
      import('./ingredients/ingredients.module').then(
        (ingredient) => ingredient.IngredientsModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then(
        (product) => product.ProductsModule
      ),
    canActivate: [authGuard],
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
