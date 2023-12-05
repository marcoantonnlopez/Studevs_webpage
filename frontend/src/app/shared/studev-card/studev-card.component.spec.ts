import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudevCardComponent } from './studev-card.component';

describe('StudevCardComponent', () => {
  let component: StudevCardComponent;
  let fixture: ComponentFixture<StudevCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudevCardComponent]
    });
    fixture = TestBed.createComponent(StudevCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
