import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  ngOnInit(): void {
    this.setUpEdit();
  }

  setUpEdit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null; //is saying that editMode will be true or false depending on whether the params id is null. If it isn't null it will be set to true. If it is null it will be set to false.
          this.initForm();
        }
      )
  };

  onSubmit() {
    console.log(this.recipeForm)
  };

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(),
        amount: new FormControl()
      })
    )
  };

  private initForm() {
    let recipeName = "";
    let recipeImagePath = "";
    let recipeDescription = "";
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);

      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name),
            'amount': new FormControl(ingredient.amount)
          }));
        };
      };
    };

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    });
  };

  updateIngredients() {

  }

};


// In the next lecture, we'll add some code to access the controls of our form array:

// *ngFor="let ingredientCtrl of recipeForm.get('ingredients').controls; let i = index"

// This code will fail with the latest Angular version.

// You can fix it easily though. Outsource the "get the controls" logic into a getter of your component code (the .ts file):

// get controls() { // a getter!
//   return (<FormArray>this.recipeForm.get('ingredients')).controls;
// }
// In the template, you can then use:

// *ngFor="let ingredientCtrl of controls; let i = index"

// This adjustment is required due to the way TS works and Angular parses your templates (it doesn't understand TS there).
