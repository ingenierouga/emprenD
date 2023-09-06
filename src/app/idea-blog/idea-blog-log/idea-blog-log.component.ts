import { Component, OnInit, Input } from '@angular/core';
import { Idea } from '../idea.model';

@Component({
  selector: 'app-idea-blog-log',
  templateUrl: './idea-blog-log.component.html',
  styleUrls: ['./idea-blog-log.component.scss'],
})
export class IdeaBlogLogComponent implements OnInit {
  @Input('ideasDisplay') ideas: Idea[] = [];

  constructor() {}

  ngOnInit(): void {}
}
