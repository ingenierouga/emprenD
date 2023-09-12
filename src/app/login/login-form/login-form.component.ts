import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoggedService, AuthResponseData } from 'src/app/logged.service';
import { ModalService } from '../../modal.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = '';

  constructor(
    private authService: LoggedService,
    private modalService: ModalService,
    private router: Router
  ) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    //console.log(form.value);
    if (!form.valid) {
      return;
    }
    const email = form.value.username;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      (resData) => {
        /* this.modalService.openNotificationModal(
          'Exito',
          'Tu usuario fue guardado correctamente'
        ); */
        this.isLoading = false;
        this.router.navigate(['/blog']);
      },
      (errorMessage) => {
        this.isLoading = false;
        this.error = errorMessage;
      }
    );

    form.reset();
  }
}
