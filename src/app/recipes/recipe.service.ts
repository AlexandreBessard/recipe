import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/Ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

//Inject a Service into a Service
@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Test Recipe",
      "Description",
      "https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?auto=format&fit=crop&q=80&w=1792&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      [
        new Ingredient("Meat", 1),
        new Ingredient("French Fries", 20)
      ]),
    new Recipe(
      "Another Recipe",
      "Another Description",
      "https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-1-1200.jpg",
      [
        new Ingredient("Buns", 2),
        new Ingredient("Meat", 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    // return copy of that array, we do not have access from the array from the outside
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
