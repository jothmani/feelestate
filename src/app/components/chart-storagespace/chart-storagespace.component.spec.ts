import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStoragespaceComponent } from './chart-storagespace.component';

describe('ChartStoragespaceComponent', () => {
  let component: ChartStoragespaceComponent;
  let fixture: ComponentFixture<ChartStoragespaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartStoragespaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartStoragespaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
