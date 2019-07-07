import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpRequest } from '@angular/common/http';

import { PhoneService } from './phone.service';

const BASE_URL: string = 'http://localhost:3000/v1';

describe('PhoneServiceService', () => {
  let service: PhoneService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    return TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ PhoneService ],
    });

    service = TestBed.get(PhoneService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    service = TestBed.get(PhoneService);
    expect(service).toBeTruthy();
  });

  it('should return an observable on generate phone numbers', () => {
    service = TestBed.get(PhoneService);
    httpMock = TestBed.get(HttpTestingController);

    service.generatePhoneNumber().subscribe((generatePhoneResp: any) => {
     expect(generatePhoneResp.phoneNum).toEqual('0728000000');
    });

    httpMock
      .expectOne((req: HttpRequest<any>): boolean => {
        // match the request with needed req properties
        return req.url === `${BASE_URL}/phone/generate`;
      })
      .flush({
        phoneNum: '0728000000',
      });
  });
});
