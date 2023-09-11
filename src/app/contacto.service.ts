import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ContactoService {
  constructor(private http: HttpClient) {}

  guardarContacto(contactoData: {
    email: string;
    fecha: Date;
    mensaje: string;
    nombre: string;
    telefono: number;
  }) {
    return this.http.post(
      'https://emprend-default-rtdb.firebaseio.com/contactos.json',
      JSON.stringify(contactoData)
    );
  }
}
