import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent {
  contactoForm: FormGroup;

  onSubmit() {
    console.log(this.contactoForm);
  }

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\d{8,10}$/),
      ]),
      fecha: new FormControl(''),
      mensaje: new FormControl('', [
        Validators.required,
        Validators.maxLength(250),
      ]),
    });
  }
}
