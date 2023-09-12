import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoggedService } from '../../logged.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-logged',
  templateUrl: './header-logged.component.html',
  styleUrls: ['./header-logged.component.scss'],
  providers: [LoggedService],
})
export class HeaderLoggedComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription | undefined;
  logged: boolean = false;
  usuario: string = '';

  constructor(private loggedService: LoggedService) {}

  ngOnInit() {
    this.usuario = this.loggedService.email;
    this.userSub = this.loggedService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      //console.log('user:');
      //console.log(user);
      //console.log('email:' + user.email);
    });
  }

  ngOnDestroy() {
    this.userSub?.unsubscribe();
  }
}
