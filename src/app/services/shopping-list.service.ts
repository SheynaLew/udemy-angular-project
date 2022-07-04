import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Tin of Baked Beans', 1),
    new Ingredient ('Loaf of Bread', 1),
    new Ingredient ('Tub of butter', 1)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
}

// use this to store the shopping list
// use this to add items to shopping list
