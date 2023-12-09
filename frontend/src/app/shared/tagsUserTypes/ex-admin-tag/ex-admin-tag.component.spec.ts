import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExAdminTagComponent } from './ex-admin-tag.component';

describe('ExAdminTagComponent', () => {
  let component: ExAdminTagComponent;
  let fixture: ComponentFixture<ExAdminTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExAdminTagComponent]
    });
    fixture = TestBed.createComponent(ExAdminTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
