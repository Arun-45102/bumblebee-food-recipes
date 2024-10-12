import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reciperesults',
  templateUrl: './reciperesults.component.html',
  styleUrls: ['./reciperesults.component.scss'],
})
export class ReciperesultsComponent {
  @Input() searchResults: any;
}
