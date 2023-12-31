import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoggedService } from '../../logged.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-idea-blog-form',
  templateUrl: './idea-blog-form.component.html',
  styleUrls: ['./idea-blog-form.component.scss'],
  providers: [],
})
export class IdeaBlogFormComponent implements OnInit, OnDestroy {
  ideaForm: FormGroup;
  usuario: string = '';

  private userSub: Subscription | undefined;

  onSubmit() {
    this.ideaShared.emit({
      content: this.ideaForm.value.idea,
      createdBy: this.usuario,
    });
    this.ideaForm.reset();
    //this.ideaForm.value.idea = '';
  }

  @Output() ideaShared = new EventEmitter<{
    content: string;
    createdBy: string;
  }>();

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
    //this.usuario = this.loggedService.email;
    this.userSub = this.loggedService.user.subscribe((user) => {
      if (user.email) {
        this.usuario = user.email;
      } else {
        this.usuario = 'anonimo';
      }
    });
  }

  ngOnDestroy() {
    this.userSub?.unsubscribe();
  }
}
