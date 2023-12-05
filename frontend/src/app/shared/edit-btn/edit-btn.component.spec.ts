import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBtnComponent } from './edit-btn.component';

describe('EditBtnComponent', () => {
  let component: EditBtnComponent;
  let fixture: ComponentFixture<EditBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBtnComponent]
    });
    fixture = TestBed.createComponent(EditBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
