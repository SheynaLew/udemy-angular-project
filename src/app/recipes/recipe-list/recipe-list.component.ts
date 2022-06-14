import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Beans on Toast", "A tin of baked beans on a slice of toast", "https://thumbs.dreamstime.com/b/beans-toast-9341313.jpg"),
    new Recipe("Beans on Toast", "A tin of baked beans on a slice of toast", "https://thumbs.dreamstime.com/b/beans-toast-9341313.jpg"),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
