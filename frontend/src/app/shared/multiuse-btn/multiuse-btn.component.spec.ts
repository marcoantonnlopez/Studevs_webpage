import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiuseBtnComponent } from './multiuse-btn.component';

describe('MultiuseBtnComponent', () => {
  let component: MultiuseBtnComponent;
  let fixture: ComponentFixture<MultiuseBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiuseBtnComponent]
    });
    fixture = TestBed.createComponent(MultiuseBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
