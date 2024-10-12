import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.scss'],
})
export class RecipedetailsComponent {
  recipeDetail: any = {};
  summary: SafeHtml = '';
  instructions: SafeHtml = '';

  constructor(
    private router: ActivatedRoute,
    private recipeService: RecipesService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const id: any = this.router.snapshot.paramMap.get('id');
    this.recipeDetails(parseInt(id));
  }

  recipeDetails(id: number) {
    this.recipeService.getRecipeDetails(id).subscribe((data) => {
      this.recipeDetail = data;
      this.summary = this.sanitizer.bypassSecurityTrustHtml(
        this.recipeDetail.summary
      );
      this.instructions = this.sanitizer.bypassSecurityTrustHtml(
        this.recipeDetail.instructions
      );
    });
  }
}
