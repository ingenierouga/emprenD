import { Component, OnInit } from '@angular/core';

import { Member } from './member.model';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss'],
})
export class EquipoComponent implements OnInit {
  members: Member[] = [
    new Member(
      '../../../assets/images/Erlend.PNG',
      'Ernesto Escucha',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'redes'
    ),
    new Member(
      '../../../assets/images/Cristho2.jpg',
      'Homero Cristho',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'redes'
    ),
    new Member(
      '../../../assets/images/banksy.jpg',
      'Guillo Bankno',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'redes'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
