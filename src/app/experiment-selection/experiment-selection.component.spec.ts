import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentSelectionComponent } from './experiment-selection.component';

describe('ExperimentSelectionComponent', () => {
  let component: ExperimentSelectionComponent;
  let fixture: ComponentFixture<ExperimentSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperimentSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
