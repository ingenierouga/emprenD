import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoggedService } from '../../logged.service';

@Component({
  selector: 'app-idea-blog-form',
  templateUrl: './idea-blog-form.component.html',
  styleUrls: ['./idea-blog-form.component.scss'],
  providers: [LoggedService],
})
export class IdeaBlogFormComponent implements OnInit {
  ideaForm: FormGroup;
  usuario: string = '';

  onSubmit() {
    console.log(this.ideaForm);
    this.ideaShared.emit({
      content: this.ideaForm.value.idea,
      createdBy: this.usuario,
    });

    this.ideaForm.value.idea = '';
  }

  @Output() ideaShared = new EventEmitter<{
    content: string;
    createdBy: string;
  }>();
  ideaContent = '';

  //createdBy vendria del objeto en la app que represente al usuario logeado
  createdBy = 'test user';

  constructor(private fb: FormBuilder, private loggedService: LoggedService) {
    this.ideaForm = this.fb.group({
      idea: new FormControl('', [
        Validators.required,
        Validators.maxLength(250),
      ]),
    });
  }

  ngOnInit() {
    this.usuario = this.loggedService.userLogged;
  }
}
