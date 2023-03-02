import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  constructor(private authService: AuthService) { }

  isSignUpMode = true;
  isLoading = false;
  errorMessage: string = null;

  onSwitchMode() {
    this.isSignUpMode = !this.isSignUpMode;
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      const email = form.value.email;
      const password = form.value.password;

      this.isLoading = true;
      if (this.isSignUpMode) {
        this.authService.signUp(email, password).subscribe(resData => {
          console.log(resData)
          this.isLoading = false;
        },
          error => {
            console.log(error)
            this.errorMessage = "An error occured!"
            this.isLoading = false;
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
