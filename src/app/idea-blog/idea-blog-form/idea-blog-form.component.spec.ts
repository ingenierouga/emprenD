import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaBlogFormComponent } from './idea-blog-form.component';

describe('IdeaBlogFormComponent', () => {
  let component: IdeaBlogFormComponent;
  let fixture: ComponentFixture<IdeaBlogFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdeaBlogFormComponent]
    });
    fixture = TestBed.createComponent(IdeaBlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
