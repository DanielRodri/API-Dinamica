import { TestBed } from '@angular/core/testing';

import { DinamicapiService } from './dinamicapi.service';

describe('DinamicapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DinamicapiService = TestBed.get(DinamicapiService);
    expect(service).toBeTruthy();
  });
});
