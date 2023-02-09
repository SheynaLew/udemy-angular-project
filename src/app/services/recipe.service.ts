import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Recipe } from "../recipes/recipe.model";
import { DataStorageService } from "../shared/data-storage-service";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) { };


  get immutableRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  private recipes: Recipe[] = [
    new Recipe(
      1,
      "Beans on Toast",
      "A tin of baked beans on a slice of toast",
      "https://thumbs.dreamstime.com/b/beans-toast-9341313.jpg",
      [
        new Ingredient("tin of baked beans", 1),
        new Ingredient("slice of bread", 1),
        new Ingredient("butter", 1)
      ]),
    new Recipe(
      2,
      "Cheese on Toast",
      "A slice of cheese on a slice of toast",
      "https://thumbs.dreamstime.com/b/cheese-toast-9705535.jpg",
      [
        new Ingredient("slice of cheese", 1),
        new Ingredient("slice of bread", 1),
        new Ingredient("butter", 1)
      ]),

  ];

  getRecipes() {
    return this.immutableRecipes;
  }

  addToShoppingList(ingredients: Ingredient[]) {
    for (let ingredient of ingredients) {
      this.shoppingListService.addIngredient(ingredient);
    }
  };

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recreateRecipeArray();
  };

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recreateRecipeArray();
  };

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  };

  recreateRecipeArray() {
    this.recipesChanged.next(this.recipes.slice());
  };

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

};

//use this to store the recipes array - DONE
//use this to add ingredients to shopping list
//use this to edit recipe (editing recipe should also edit the shopping list)
//use this to delete recipe (deleting receipe should also delete items from shopping list)
