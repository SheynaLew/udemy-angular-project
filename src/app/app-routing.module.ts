import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NoRecipeComponent } from "./recipes/no-recipe/no-recipe.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: ':id', component: RecipeItemComponent },
      { path: 'no-recipe', component: NoRecipeComponent }
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
