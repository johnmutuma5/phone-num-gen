import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PhoneService } from '../../phone.service';
import { GeneratePhoneNumComponent } from './generate-phone-num.component';

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
});
