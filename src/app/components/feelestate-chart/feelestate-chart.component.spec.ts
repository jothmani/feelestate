import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelestateChartComponent } from './feelestate-chart.component';

describe('FeelestateChartComponent', () => {
  let component: FeelestateChartComponent;
  let fixture: ComponentFixture<FeelestateChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeelestateChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelestateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
