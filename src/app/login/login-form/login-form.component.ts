import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoggedService } from 'src/app/logged.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  onSubmit(form: NgForm) {}
}
