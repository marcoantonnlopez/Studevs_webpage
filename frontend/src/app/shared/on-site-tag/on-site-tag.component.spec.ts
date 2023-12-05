import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnSiteTagComponent } from './on-site-tag.component';

describe('OnSiteTagComponent', () => {
  let component: OnSiteTagComponent;
  let fixture: ComponentFixture<OnSiteTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnSiteTagComponent]
    });
    fixture = TestBed.createComponent(OnSiteTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
