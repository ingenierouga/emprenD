import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaBlogFormComponent } from './idea-blog-form.component';
import { LoggedService } from 'src/app/logged.service';

describe('IdeaBlogFormComponent', () => {
  let component: IdeaBlogFormComponent;
  let fixture: ComponentFixture<IdeaBlogFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdeaBlogFormComponent],
    });
    fixture = TestBed.createComponent(IdeaBlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user from logged service', () => {
    let loggedService = fixture.debugElement.injector.get(LoggedService);
    fixture.detectChanges();
    expect(loggedService.userLogged).toEqual(component.usuario);
  });
});
