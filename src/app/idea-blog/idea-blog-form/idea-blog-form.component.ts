import { Component, OnInit } from '@angular/core';

import { Idea } from '../idea.model';

@Component({
  selector: 'app-idea-blog-form',
  templateUrl: './idea-blog-form.component.html',
  styleUrls: ['./idea-blog-form.component.scss'],
})
export class IdeaBlogFormComponent implements OnInit {
  ideas: Idea[] = [
    new Idea(
      'Test User',
      'Mi idea es una app donde se puedan registrar nuevas ideas'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
