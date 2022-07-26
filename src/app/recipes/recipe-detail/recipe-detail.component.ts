// creates an event which is called in the html. It has been called in the html when the html has heard an event being fired from the recipe-item component
// this is event should be displaying the data in the html

import { Component, HostListener, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  @HostListener('mouseclick') mouseclick(data: Event) {
  }

  onDeleteRecipe() {


  }

}
