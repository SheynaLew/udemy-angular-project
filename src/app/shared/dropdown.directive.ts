import { Directive, ElementRef, HostListener, OnInit, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    // const dropdownState = false;   < almost!!!
    // if (this.isOpen === false) {
      //set the class of the element the directive is attached to to be "open"
      //change the isOpen to true
    // } else {
      //set the class of the element the directive is attached to to be removed
      //change the isOpen to false
    // }
  }
}

//Notes after going through the solution
  //we want to listen for an event on the component so we use HostListener and assign it the 'click' parameter
  //we then give the HostListener a function which it will execute on hearing the click event
  //set an isOpen variable to be set to false initially
    //I was close on this one, but it needs to be outside of the HostListener
  //instead of using an ifstatement as I had done, we can toggle the isOpen boolean to be it's opposite.
    // this.isOpen = !this.isOpen
  //to change isOpen within the HostListener we need to use HostBinding to access the class property
    //this means that whenever isOpen is true, the class of open will be added to the element and whenever it is false it will be removed.
  //to use the diretive we need to add it to app.module.ts
    //declarations: [
    //   DropdownDirective
    // ]
  //It can now be attached to the element whose class you want to change.
    //In this case the div for the dropdown menu in the recipe-detail.component.html
      //<div appDropDown>
    //and in the header.component.html in the dropdown menu




//change the class of the div on the dropdown button so that it contains "open" when you click on it and the doesn't contain "open" when you click it again
//My work below

// @HostListener('mouseclick')onclick(data: Event) {
//   this.renderer.addClass(this.elementRef, 'open')
// }

// export class DropdownDirective  {
//   constructor(private elementRef: ElementRef, private renderer: Renderer2) {
//       this.renderer.addClass(this.elementRef, 'open')
//   }

// }
