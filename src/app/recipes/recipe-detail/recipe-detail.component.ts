// creates an event which is called in the html. It has been called in the html when the html has heard an event being fired from the recipe-item component
// this is event should be displaying the data in the html

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
