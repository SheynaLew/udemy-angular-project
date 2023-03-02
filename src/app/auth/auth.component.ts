import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

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
    if (!form.valid) {
      return;
    };

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isSignUpMode) {
      authObs = this.authService.signUp(email, password);

    } else {
      authObs = this.authService.logIn(email, password);
    };

    authObs.subscribe(
      resData => {
        console.log(resData)
        this.errorMessage = null;
        this.isLoading = false;
      },
      errorMessage => {
        console.log(errorMessage)
        this.errorMessage = errorMessage
        this.isLoading = false;
      }
    )
    form.reset();
  };


};
