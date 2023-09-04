import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSectionsComponent } from './footer-sections.component';

describe('FooterSectionsComponent', () => {
  let component: FooterSectionsComponent;
  let fixture: ComponentFixture<FooterSectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterSectionsComponent]
    });
    fixture = TestBed.createComponent(FooterSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
