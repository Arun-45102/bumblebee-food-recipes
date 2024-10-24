import { Component } from '@angular/core';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private recipesService: RecipesService) {}

  trivia: any = {};

  ngOnInit() {
    this.getTrivia();
  }

  getTrivia() {
    this.recipesService.getFoodTrivia().subscribe((data) => {
      this.trivia = data;
    });
  }
}
