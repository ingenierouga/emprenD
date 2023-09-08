import { Component } from '@angular/core';
import { LoggedService } from '../../logged.service';

@Component({
  selector: 'app-header-logged',
  templateUrl: './header-logged.component.html',
  styleUrls: ['./header-logged.component.scss'],
  providers: [LoggedService],
})
export class HeaderLoggedComponent {
  logged: boolean = false;
  usuario: string = '';

  constructor(private loggedService: LoggedService) {}

  ngOnInit() {
    this.logged = this.loggedService.logged;
    this.usuario = this.loggedService.userLogged;
  }
}
