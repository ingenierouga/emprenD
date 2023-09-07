import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent {
  form: FormGroup;

  onSubmit(form: NgForm) {
    console.log(form);
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      inputField: ['', [Validators.minLength(2), Validators.maxLength(50)]],
    });
  }
}
