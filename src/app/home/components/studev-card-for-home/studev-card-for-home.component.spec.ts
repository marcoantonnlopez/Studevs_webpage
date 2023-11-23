import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudevCardForHomeComponent } from './studev-card-for-home.component';

describe('StudevCardForHomeComponent', () => {
  let component: StudevCardForHomeComponent;
  let fixture: ComponentFixture<StudevCardForHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudevCardForHomeComponent]
    });
    fixture = TestBed.createComponent(StudevCardForHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
