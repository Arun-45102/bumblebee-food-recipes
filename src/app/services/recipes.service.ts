import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  apiUrl = environment.spoonacular.apiUrl;

  constructor(private http: HttpClient) {}

  getFoodTrivia() {
    const url = this.apiUrl + '/food/trivia/random';
    return this.http.get(url);
  }

  getRecipeSearch(query: string, number: number) {
    const url = `${this.apiUrl}/recipes/complexSearch?query=${query}&number=${number}`;
    return this.http.get(url);
  }

  getRecipeDetails(id: number) {
    const url = `${this.apiUrl}/recipes/${id}/information?addWinePairing=true&addTasteData=true`;
    return this.http.get(url);
  }

  getEquipmentsDetails(id: number) {
    const url = `${this.apiUrl}/recipes/${id}/equipmentWidget.json`;
    return this.http.get(url);
  }

  getSimilarRecipe(id: number) {
    const url = `${this.apiUrl}/recipes/${id}/similar?number=4`;
    return this.http.get(url);
  }

  getWineDescription(query: string) {
    const url = `${this.apiUrl}/food/wine/description?wine=${query}`;
    return this.http.get(url);
  }
}
