import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentTestComponent } from './experiment-test.component';

describe('ExperimentTestComponent', () => {
  let component: ExperimentTestComponent;
  let fixture: ComponentFixture<ExperimentTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperimentTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
