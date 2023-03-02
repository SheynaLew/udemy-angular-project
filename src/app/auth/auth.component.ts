import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})

export class AuthComponent {
  constructor(private authService: AuthService) { }

  isSignUpMode = true;

  onSwitchMode() {
    this.isSignUpMode = !this.isSignUpMode;
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      const email = form.value.email;
      const password = form.value.password;

      if (this.isSignUpMode) {
        this.authService.signUp(email, password).subscribe(resData => {
          console.log(resData)
        },
          error => {
            console.log(error)
          }
        );

      } else {
        return;
      };
    } else {
      // ...
    }

    form.reset();
  }

};
