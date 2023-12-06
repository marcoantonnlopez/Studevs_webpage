import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRUDBtnsComponent } from './crud-btns.component';

describe('CRUDBtnsComponent', () => {
  let component: CRUDBtnsComponent;
  let fixture: ComponentFixture<CRUDBtnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CRUDBtnsComponent]
    });
    fixture = TestBed.createComponent(CRUDBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
