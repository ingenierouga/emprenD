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
  private tokenExpirationTimer: any;

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
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  logout() {
    this.user.next({} as User);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLoout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  autoLogin() {
    const holder = localStorage.getItem('userData');
    let userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = {
      email: '',
      id: '',
      _token: '',
      _tokenExpirationDate: '',
    };

    if (!holder || holder === '') {
      return;
    } else {
      userData = JSON.parse(holder);
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    //since we have a getter on the User object, this should return null if the token is not valid
    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLoout(expirationDuration);
    }

    console.log(holder);
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
    this.autoLoout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
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
