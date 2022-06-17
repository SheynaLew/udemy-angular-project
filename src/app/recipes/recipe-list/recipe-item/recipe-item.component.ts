// creates a function which has been called when the link is clicked in the html
// creates any properties which are being used in the function (event emitter)
//the function will emit an event which is listened for in the recipe-detail component html.

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  @Output() recipeNameSent = new EventEmitter<any>();
  @Output() recipeDescriptionSent = new EventEmitter<any>();

  recipeName: string;
  recipeDescription: string;

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected() {
    this.recipeName = this.recipe.name;
    this.recipeDescription = this.recipe.description;
    // this function needs to send the data to the recipe detail component and emit an event for the recipe detail component to listen for
    this.recipeNameSent.emit(this.recipeName);
    this.recipeDescriptionSent.emit(this.recipeDescription);
  }

}
