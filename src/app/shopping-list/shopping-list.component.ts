import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

    ingredients: Ingredient[] = [
      new Ingredient('Tin of Baked Beans', 1),
      new Ingredient ('Loaf of Bread', 1),
      new Ingredient ('Tub of butter', 1)
    ];

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }

}
