import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-idea-blog-form',
  templateUrl: './idea-blog-form.component.html',
  styleUrls: ['./idea-blog-form.component.scss'],
})
export class IdeaBlogFormComponent implements OnInit {
  @Output() ideaShared = new EventEmitter<{
    content: string;
    createdBy: string;
  }>();
  ideaContent = '';
  createdBy = 'test user';

  constructor() {}

  ngOnInit() {}

  onShareIdea() {
    this.ideaShared.emit({
      content: this.ideaContent,
      createdBy: this.createdBy,
    });

    this.ideaContent = '';
  }
}
