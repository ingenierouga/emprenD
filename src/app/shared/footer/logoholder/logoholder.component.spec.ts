import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoholderComponent } from './logoholder.component';

describe('LogoholderComponent', () => {
  let component: LogoholderComponent;
  let fixture: ComponentFixture<LogoholderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoholderComponent]
    });
    fixture = TestBed.createComponent(LogoholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
