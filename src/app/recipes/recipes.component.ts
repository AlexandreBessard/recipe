import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  // should be removed, share the same instance, if go back to upper component, this service instance is destroyed
  //providers: [RecipeService]
})
export class RecipesComponent {

}
