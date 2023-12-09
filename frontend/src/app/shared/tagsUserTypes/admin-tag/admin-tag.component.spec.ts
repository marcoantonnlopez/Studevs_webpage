import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTagComponent } from './admin-tag.component';

describe('AdminTagComponent', () => {
  let component: AdminTagComponent;
  let fixture: ComponentFixture<AdminTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTagComponent]
    });
    fixture = TestBed.createComponent(AdminTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
