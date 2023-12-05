import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnLineTagComponent } from './on-line-tag.component';

describe('OnLineTagComponent', () => {
  let component: OnLineTagComponent;
  let fixture: ComponentFixture<OnLineTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnLineTagComponent]
    });
    fixture = TestBed.createComponent(OnLineTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
