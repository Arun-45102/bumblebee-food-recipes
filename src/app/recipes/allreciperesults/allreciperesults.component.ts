import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-allreciperesults',
  templateUrl: './allreciperesults.component.html',
  styleUrls: ['./allreciperesults.component.scss'],
})
export class AllreciperesultsComponent {
  recipeItems: any = {};
  results: boolean = false;
  query: string = '';

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipesService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.query = params['query'];
      this.recipeService
        .getRecipeSearch(params['query'], params['number'])
        .subscribe((data) => {
          this.recipeItems = data;
          console.log(this.recipeItems.results);
          this.results = true;
        });
    });
  }
}
