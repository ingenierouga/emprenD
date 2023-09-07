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
    this.hovered = true;
  }

  onMouseOut() {
    this.hovered = false;
  }

  ngOnInit(): void {}
}
