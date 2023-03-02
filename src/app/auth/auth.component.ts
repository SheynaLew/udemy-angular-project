import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})

export class AuthComponent {
  isSignUpMode = true;

  onSwitchMode() {
    this.isSignUpMode = !this.isSignUpMode;
  };

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
  }

};
