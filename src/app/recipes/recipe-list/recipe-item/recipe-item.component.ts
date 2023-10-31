import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";

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

  @Output()
  recipeSelected = new EventEmitter<void>();

  onSelected() {
    this.recipeSelected.emit();
  }

}
