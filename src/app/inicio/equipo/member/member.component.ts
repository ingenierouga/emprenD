import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../member.model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  @Input('memberDisplay')
  member!: Member;

  hovered: boolean = false;

  constructor() {}

  onMouseOver() {
    // Code to execute when the mouse enters the element
    console.log('Mouse over the element');
    this.hovered = true;
    // You can change styles or perform other actions here
  }

  onMouseOut() {
    // Code to execute when the mouse leaves the element
    console.log('Mouse out of the element');
    this.hovered = false;
    // You can reset styles or perform other actions here
  }

  ngOnInit(): void {}
}
