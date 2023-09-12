import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoggedService } from '../../logged.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-logged',
  templateUrl: './header-logged.component.html',
  styleUrls: ['./header-logged.component.scss'],
  providers: [],
})
export class HeaderLoggedComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription | undefined;
  logged: boolean = false;
  usuario: string = '';

  constructor(private loggedService: LoggedService) {}

  onLogout() {
    this.loggedService.logout();
  }

  ngOnInit() {
    //this.usuario = this.loggedService.email;
    this.userSub = this.loggedService.user.subscribe((user) => {
      if (user.email) {
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }

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
