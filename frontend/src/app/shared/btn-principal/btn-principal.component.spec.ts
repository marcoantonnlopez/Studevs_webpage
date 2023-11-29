import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnPrincipalComponent } from './btn-principal.component';

describe('BtnPrincipalComponent', () => {
  let component: BtnPrincipalComponent;
  let fixture: ComponentFixture<BtnPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnPrincipalComponent]
    });
    fixture = TestBed.createComponent(BtnPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
