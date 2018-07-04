import { TestBed, inject } from '@angular/core/testing';

import { DatasizeService } from './datasize.service';

describe('DatasizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatasizeService]
    });
  });

  it('should be created', inject([DatasizeService], (service: DatasizeService) => {
    expect(service).toBeTruthy();
  }));
});
