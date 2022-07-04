// creates a function which has been called when the link is clicked in the html
// creates any properties which are being used in the function (event emitter)
//the function will emit an event which is listened for in the recipe-detail component html.

import { Component, OnInit, Input} from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  // the event emitter is not passing any information, it is just informing the parent component that an event was fired.
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onRecipeSelected() {
    // Using Event Emitters, Inputs and Outputs
      // this function needs to emit an event, with no information being included.
      // this.recipeSelected.emit();

    //Using Services
    this.recipeService.recipeSelected.emit(this.recipe);

  }

}
