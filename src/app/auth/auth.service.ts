import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment.prod";

interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) { }

  key = environment.authApiKey;

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.key}`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
      .pipe(catchError(errorRes => {
        let errorMessage = "An unknown error occured!";
        if (!errorRes.error || !errorRes.error.error) {
          return throwError(errorMessage)
        };

        switch (errorRes.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMessage = "Woops! This user already exists! Try another email address, or log in."
        };
        return throwError(errorMessage)
      }))
  }
}
