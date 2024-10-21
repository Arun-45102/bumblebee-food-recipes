import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.scss'],
})
export class RecipedetailsComponent {
  recipeDetail: any = {};
  summary: SafeHtml = '';
  instructions: SafeHtml = '';
  tasteDetails: any = {};
  extendedInstruction: boolean = false;
  analyzedInstructions: any = [];
  equipmentDetails: any = {};
  similarRecipe: any = [];

  loading: boolean = false;

  faCheck = faCheck;
  faMinus = faMinus;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipesService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = true;
    const id: any = this.route.snapshot.paramMap.get('id');
    this.recipeDetails(parseInt(id));
    this.getTasteDetails(parseInt(id));
    this.getEquipmentsDetails(parseInt(id));
  }

  recipeDetails(id: number) {
    this.recipeService.getRecipeDetails(id).subscribe((data) => {
      this.recipeDetail = data;
      this.analyzedInstructions = this.recipeDetail.analyzedInstructions;
      this.summary = this.sanitizer.bypassSecurityTrustHtml(
        this.recipeDetail.summary
      );
      this.instructions = this.sanitizer.bypassSecurityTrustHtml(
        this.recipeDetail.instructions
      );
      this.loading = false;
    });
  }

  getTasteDetails(id: number) {
    this.recipeService.getTasteDetails(id).subscribe((data) => {
      this.tasteDetails = data;
      this.loading = false;
    });
  }

  getEquipmentsDetails(id: number) {
    this.recipeService.getEquipmentsDetails(id).subscribe((data) => {
      this.equipmentDetails = data;
      this.loading = false;
    });
  }

  getIngredientDetails(id: number) {
    this.router.navigate(['ingredients/ingredientdetails/' + id]);
  }
}
