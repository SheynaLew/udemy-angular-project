import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Beans on Toast", "A tin of baked beans on a slice of toast", "https://thumbs.dreamstime.com/b/beans-toast-9341313.jpg"),
    new Recipe("Cheese on Toast", "A slice of cheese on a slice of toast", "https://thumbs.dreamstime.com/b/cheese-toast-9705535.jpg"),

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
