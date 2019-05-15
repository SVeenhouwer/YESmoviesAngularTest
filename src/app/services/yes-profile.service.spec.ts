import { TestBed } from '@angular/core/testing';

import { YesProfileService } from './yes-profile.service';

describe('YesProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YesProfileService = TestBed.get(YesProfileService);
    expect(service).toBeTruthy();
  });
});
