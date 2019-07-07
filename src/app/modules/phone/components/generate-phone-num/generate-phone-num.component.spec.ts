import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  HttpClientTestingModule,
  // HttpTestingController,
} from '@angular/common/http/testing';
// import { HttpRequest } from '@angular/common/http';
import { of } from 'rxjs';

import { PhoneService } from '../../phone.service';
import { GeneratePhoneNumComponent } from './generate-phone-num.component';

const BASE_URL: string = 'http://localhost:3000/v1';

describe('GeneratePhoneNumComponent', () => {
  let component: GeneratePhoneNumComponent;
  let fixture: ComponentFixture<GeneratePhoneNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratePhoneNumComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ PhoneService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratePhoneNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invoke service method to generate phone number', () => {
    const phoneService = TestBed.get(PhoneService);
    spyOn(phoneService, 'generatePhoneNumber').and.returnValue(of({
      phoneNum: '0728000000'
    }));
    component.onGenerateNumber();
    expect(phoneService.generatePhoneNumber).toHaveBeenCalled();
    expect(component.generatedNum).toEqual('0728000000');
  });

  it('should not crash when the response does not include a phone num', () => {
    const phoneService = TestBed.get(PhoneService);
    spyOn(phoneService, 'generatePhoneNumber').and.returnValue(of({
      phoneNum: undefined,
    }));
    component.onGenerateNumber();
    expect(component.generatedNum).toEqual('');
  });

  it('should generate and display the phone number', fakeAsync(() => {
    const phoneService = TestBed.get(PhoneService);
    spyOn(phoneService, 'generatePhoneNumber').and.returnValue(of({
      phoneNum: '0728000009'
    }));
    // trigger click on the native element
    fixture.debugElement.query(By.css('button#generate-phone-button'))
      .triggerEventHandler('click', null);
    tick(); // await for the event loop to clear
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // the phone num generated should be shown
    expect(compiled.querySelector('#generated-phone').textContent)
      .toContain('0728000009')
  }))
});

