import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberTagComponent } from './member-tag.component';

describe('MemberTagComponent', () => {
  let component: MemberTagComponent;
  let fixture: ComponentFixture<MemberTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberTagComponent]
    });
    fixture = TestBed.createComponent(MemberTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
