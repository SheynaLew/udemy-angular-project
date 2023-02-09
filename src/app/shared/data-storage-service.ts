import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../services/recipe.service";


@Injectable({ providedIn: 'root' })

export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://ng-course-recipe-book-1d2ed-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes)
      .subscribe(response => {
        console.log(response);
      });
  }
}
