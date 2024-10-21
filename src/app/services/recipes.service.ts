import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  apiUrl = environment.rapidApi.apiUrl;

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
    const url = `${this.apiUrl}/recipes/${id}/information`;
    return this.http.get(url);
  }

  getTasteDetails(id: number) {
    const url = `${this.apiUrl}/recipes/${id}/tasteWidget.json`;
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
}
