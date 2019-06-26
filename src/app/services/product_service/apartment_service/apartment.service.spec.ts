import { TestBed } from '@angular/core/testing';

import { Apartment } from './apartment.service';

describe('Apartment', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Apartment = TestBed.get(Apartment);
    expect(service).toBeTruthy();
  });
});
