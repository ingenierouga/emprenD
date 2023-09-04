import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaBlogComponent } from './idea-blog.component';

describe('IdeaBlogComponent', () => {
  let component: IdeaBlogComponent;
  let fixture: ComponentFixture<IdeaBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdeaBlogComponent]
    });
    fixture = TestBed.createComponent(IdeaBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
