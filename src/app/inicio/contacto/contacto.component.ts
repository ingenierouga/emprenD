import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from '../../contacto.service';
import { ModalService } from '../../modal.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent {
  contactoForm: FormGroup;

  onSubmit() {
    //onsole.log(this.contactoForm);
    if (this.contactoForm.valid) {
      const contactoMandar = {
        email: this.contactoForm.value['email'],
        fecha: this.contactoForm.value['fecha'],
        mensaje: this.contactoForm.value['mensaje'],
        nombre: this.contactoForm.value['nombre'],
        telefono: this.contactoForm.value['telefono'],
      };

      this.contactoServicio.guardarContacto(contactoMandar).subscribe(
        (responseData) => {
          this.modalService.openNotificationModal(
            'Exito',
            'Tu informacion fue guardada correctamente, nosotros nos pondremos en contacto contigo muy pronto'
          );
        },
        (error) => {
          this.modalService.openNotificationModal(
            'Error',
            'Ocurrio un error al intentar guardar tu informacion: ' +
              error.message
          );
        }
      );
      this.contactoForm.reset();
    }
  }

  constructor(
    private fb: FormBuilder,
    private contactoServicio: ContactoService,
    private modalService: ModalService
  ) {
    this.contactoForm = this.fb.group({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\d{8,10}$/),
      ]),
      fecha: new FormControl(null, [Validators.required]),
      mensaje: new FormControl('', [
        Validators.required,
        Validators.maxLength(250),
      ]),
    });
  }
}
