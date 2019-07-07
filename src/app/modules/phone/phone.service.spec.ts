import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PhoneService } from './phone.service';

describe('PhoneServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ]
  }));

  it('should be created', () => {
    const service: PhoneService = TestBed.get(PhoneService);
    expect(service).toBeTruthy();
  });
});
