import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { User } from './user.model';
import { catchError, tap } from 'rxjs/operators';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class LoggedService {
  //user = new BehaviorSubject<User>();
  user = new BehaviorSubject<User>({} as User);
  email: string = '';

  constructor(private http: HttpClient) {}

  signup(emailParam: string, passwordParam: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= AIzaSyC1cdw9cvz8uiVBTmQDRCTDcrtKi63NQ6Y',
        { email: emailParam, password: passwordParam, returnSecureToken: true }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.email = resData.email;
          console.log(resData);
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  login(emailParam: string, passwordParam: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC1cdw9cvz8uiVBTmQDRCTDcrtKi63NQ6Y',
        { email: emailParam, password: passwordParam, returnSecureToken: true }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.email = resData.email;
          console.log(resData);
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknow error ocurred';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Este correo no esta registrado';
        break;
      case 'EMAIL_EXISTS':
        errorMessage = 'El correo ya ha sido registrado previamente';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'El Password utilizado no es el correcto';
        break;
    }
    return throwError(errorMessage);
  }
}
