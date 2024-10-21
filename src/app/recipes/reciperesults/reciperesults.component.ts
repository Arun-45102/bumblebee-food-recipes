import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reciperesults',
  templateUrl: './reciperesults.component.html',
  styleUrls: ['./reciperesults.component.scss'],
})
export class ReciperesultsComponent {
  @Input() searchResult: any;

  faArrowRight = faArrowRight;

  constructor(private router: Router) {}

  goToRecipeDetails(id: string) {
    this.router.navigate(['recipes/recipedetails/' + id]);
  }
}
