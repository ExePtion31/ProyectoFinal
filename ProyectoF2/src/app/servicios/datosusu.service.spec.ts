import { TestBed } from '@angular/core/testing';

import { DatosusuService } from './datosusu.service';

describe('DatosusuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosusuService = TestBed.get(DatosusuService);
    expect(service).toBeTruthy();
  });
});
