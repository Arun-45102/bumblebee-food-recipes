import { Component } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  searchQuery!: FormGroup;
  searchResults: any = {};
  queryNumber: number = 10;
  results: boolean = false;
  progressBars: boolean = false;

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipesService,
    private router: Router
  ) {
    this.searchQuery = this.fb.group({
      searchValue: ['', Validators.required],
    });
  }

  getRecipe() {
    this.progressBars = true;
    this.recipeService
      .getRecipeSearch(this.searchQuery.value.searchValue, this.queryNumber)
      .subscribe((data) => {
        this.searchResults = data;
        this.results = true;
        this.progressBars = false;
      });
  }

  seeAllResults() {
    console.log(this.searchQuery.value.searchValue);
    this.router.navigate(['recipes/allreciperesults'], {
      queryParams: {
        query: this.searchQuery.value.searchValue,
        number: this.searchResults.totalResults,
      },
    });
  }
}
