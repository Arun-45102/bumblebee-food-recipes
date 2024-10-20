import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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

  loading: boolean = false;

  faCheck = faCheck;
  faXmark = faXmark;

  constructor(
    private router: ActivatedRoute,
    private recipeService: RecipesService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    // this.loading = true;
    const id: any = this.router.snapshot.paramMap.get('id');
    this.recipeDetails(parseInt(id));
    this.getTasteDetails(parseInt(id));
    this.getEquipmentsDetails(parseInt(id));
  }

  recipeDetails(id: number) {
    this.recipeService.getRecipeDetails(id).subscribe((data) => {
      this.recipeDetail = data;
      this.analyzedInstructions = this.recipeDetail.analyzedInstructions;
      console.log(this.analyzedInstructions);
      this.summary = this.sanitizer.bypassSecurityTrustHtml(
        this.recipeDetail.summary
      );
      this.instructions = this.sanitizer.bypassSecurityTrustHtml(
        this.recipeDetail.instructions
      );
    });
  }

  getTasteDetails(id: number) {
    this.recipeService.getTasteDetails(id).subscribe((data) => {
      this.tasteDetails = data;
    });
  }

  getEquipmentsDetails(id: number) {
    this.recipeService.getEquipmentsDetails(id).subscribe((data) => {
      this.equipmentDetails = data;
    });
  }
}
