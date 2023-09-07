import { Component, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent implements AfterViewInit {
  onSubmit(form: NgForm) {}

  ngAfterViewInit() {
    // Initialize the datepicker
    $('#datepicker').datepicker();
  }
}
