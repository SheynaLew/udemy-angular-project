import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private recipeService: RecipeService,
    private router: Router
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
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    };
    this.onCancel();

  };

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  };

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  };

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  };

  onDeleteAllIngredients() {
    (<FormArray>this.recipeForm.get('ingredients')).clear();
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
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ])
          }));
        };
      };
    };

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
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
