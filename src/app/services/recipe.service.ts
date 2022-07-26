import { EventEmitter } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  // get immutableRecipes(): Recipe[] {
  //   return this.recipes;
  // }

  private recipes: Recipe[] = [
    new Recipe("Beans on Toast", "A tin of baked beans on a slice of toast", "https://thumbs.dreamstime.com/b/beans-toast-9341313.jpg"),
    new Recipe("Cheese on Toast", "A slice of cheese on a slice of toast", "https://thumbs.dreamstime.com/b/cheese-toast-9705535.jpg"),

  ];

  getRecipes() {
    return this.recipes.slice();
    // return this.immutableRecipes;
    // using .slice() will return a new array which is an exact copy of the array above. If we were not to use .slice() we would mutate the array whenever we change it on calling the getRecipes() function.
      //Could I also use a getter in the same way as we did in the survey styling project?? - Seems to work. Will comment out for now and come back to later.
  }


}

//use this to store the recipes array - DONE
//use this to add ingredients to shopping list
//use this to edit recipe (editing recipe should also edit the shopping list)
//use this to delete recipe (deleting receipe should also delete items from shopping list)
