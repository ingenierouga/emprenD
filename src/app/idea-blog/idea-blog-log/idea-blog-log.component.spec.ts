import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaBlogLogComponent } from './idea-blog-log.component';

describe('IdeaBlogLogComponent', () => {
  let component: IdeaBlogLogComponent;
  let fixture: ComponentFixture<IdeaBlogLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdeaBlogLogComponent]
    });
    fixture = TestBed.createComponent(IdeaBlogLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
