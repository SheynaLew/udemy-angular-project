import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  @Output() addNewItem = new EventEmitter<Ingredient>();

  newItem: (string|number)[];
  constructor() { }

  ngOnInit(): void {
  }

// my attempt: didn't work.
  // onAddIngredient(ingredient:string, amount:number) {
  //   this.newItem.push(ingredient);
  //   this.newItem.push(amount);
  //   this.addNewItem.emit(this.newItem);
  //   console.log(this.newItem);
  // }

  // following tutorial
  onAddIngredient() {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value)
    this.addNewItem.emit(newIngredient)
  }

}
