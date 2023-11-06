import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  // bind this component property from outside, other component.
  // Value can be injected from another component.
  @Input()
  recipe: Recipe;
  @Input()
  index: number;

/*  @Output()
  recipeSelected = new EventEmitter<void>();*/

  constructor(private recipeService: RecipeService) {}

  onSelected() {
    //this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
