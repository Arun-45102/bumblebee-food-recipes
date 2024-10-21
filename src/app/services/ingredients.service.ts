import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  apiUrl = environment.rapidApi.apiUrl;

  constructor(private http: HttpClient) {}

  getIngredientSearch(query: string, number: number) {
    const url = `${this.apiUrl}/food/ingredients/search?query=${query}&number=${number}`;
    return this.http.get(url);
  }

  getIngredientDetails(id: number) {
    const url = `${this.apiUrl}/food/ingredients/${id}/information?amount=1`;
    return this.http.get(url);
  }

  getIngredientSubstitute(id: number) {
    const url = `${this.apiUrl}/food/ingredients/${id}/substitutes`;
    return this.http.get(url);
  }
}
