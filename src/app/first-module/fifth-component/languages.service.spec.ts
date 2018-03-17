import { TestBed, inject } from '@angular/core/testing';

import { LanguagesServiceService } from './languages-service.service';

describe('LanguagesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanguagesServiceService]
    });
  });

  it('should be created', inject([LanguagesServiceService], (service: LanguagesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
