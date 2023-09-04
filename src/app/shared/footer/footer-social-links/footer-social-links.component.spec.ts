import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSocialLinksComponent } from './footer-social-links.component';

describe('FooterSocialLinksComponent', () => {
  let component: FooterSocialLinksComponent;
  let fixture: ComponentFixture<FooterSocialLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterSocialLinksComponent]
    });
    fixture = TestBed.createComponent(FooterSocialLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
