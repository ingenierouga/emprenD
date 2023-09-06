import { Component, OnInit } from '@angular/core';
import { Idea } from './idea.model';
@Component({
  selector: 'app-idea-blog',
  templateUrl: './idea-blog.component.html',
  styleUrls: ['./idea-blog.component.scss'],
})
export class IdeaBlogComponent implements OnInit {
  ideas: Idea[] = [
    /*   new Idea(
      'Test User',
      'Mi idea es una app donde se puedan registrar nuevas ideas'
    ), */
  ];

  constructor() {}

  ngOnInit() {}

  onSharedIdea(ideaData: { content: string; createdBy: string }) {
    this.ideas.push(new Idea(ideaData.createdBy, ideaData.content));
  }
}
