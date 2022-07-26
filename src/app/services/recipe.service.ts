import { EventEmitter } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  get immutableRecipes(): Recipe[] {
    return this.recipes;
  }

  private recipes: Recipe[] = [
    new Recipe(1, "Beans on Toast", "A tin of baked beans on a slice of toast", "https://thumbs.dreamstime.com/b/beans-toast-9341313.jpg"),
    new Recipe(2, "Cheese on Toast", "A slice of cheese on a slice of toast", "https://thumbs.dreamstime.com/b/cheese-toast-9705535.jpg"),

  ];

  getRecipes() {
    return this.immutableRecipes;
  }

  deleteRecipe() {


  }


}

//use this to store the recipes array - DONE
//use this to add ingredients to shopping list
//use this to edit recipe (editing recipe should also edit the shopping list)
//use this to delete recipe (deleting receipe should also delete items from shopping list)
