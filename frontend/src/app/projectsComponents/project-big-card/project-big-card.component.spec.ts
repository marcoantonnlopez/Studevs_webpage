import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBigCardComponent } from './project-big-card.component';

describe('ProjectBigCardComponent', () => {
  let component: ProjectBigCardComponent;
  let fixture: ComponentFixture<ProjectBigCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectBigCardComponent]
    });
    fixture = TestBed.createComponent(ProjectBigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
