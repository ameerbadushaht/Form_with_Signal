import { TestBed } from '@angular/core/testing';

import { FormSignalService } from './form-signal.service';

describe('FormSignalService', () => {
  let service: FormSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
