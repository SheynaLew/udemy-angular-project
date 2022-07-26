import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Tin of Baked Beans', 1),
    new Ingredient ('Loaf of Bread', 1),
    new Ingredient ('Tub of butter', 1)
  ];

  ingredientAdded = new EventEmitter<Ingredient>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}

// use this to store the shopping list
// use this to add items to shopping list
