import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureEventCardComponent } from './future-event-card.component';

describe('FutureEventCardComponent', () => {
  let component: FutureEventCardComponent;
  let fixture: ComponentFixture<FutureEventCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FutureEventCardComponent]
    });
    fixture = TestBed.createComponent(FutureEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
