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
  queryNumber: number = 12;
  results: boolean = false;
  progressBar: boolean = false;
  query: string = '';

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
    this.progressBar = true;
    this.query = this.searchQuery.value.searchValue;
    this.recipeService
      .getRecipeSearch(this.searchQuery.value.searchValue, this.queryNumber)
      .subscribe((data) => {
        this.searchResults = data;
        this.results = true;
        this.progressBar = false;
      });
  }

  seeAllResults() {
    this.router.navigate(['recipes/allreciperesults'], {
      queryParams: {
        query: this.searchQuery.value.searchValue,
        number: this.searchResults.totalResults,
      },
    });
  }
}
