import { Component, OnInit } from '@angular/core';
import { LoggedService } from './logged.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'EmprenD';
  name = 'Emilio';

  constructor(private authService: LoggedService) {}

  ngOnInit() {
    this.authService.autoLogin();
  }
}
