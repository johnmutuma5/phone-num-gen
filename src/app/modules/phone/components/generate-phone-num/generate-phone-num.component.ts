import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../phone.service';

@Component({
  selector: 'app-generate-phone-num',
  templateUrl: './generate-phone-num.component.html',
  styleUrls: ['./generate-phone-num.component.scss']
})
export class GeneratePhoneNumComponent implements OnInit {
  generatedNum:string = '';

  constructor(private phoneService: PhoneService) { }

  ngOnInit() { }

  onGenerateNumber() {
    // send request to server
    this.phoneService
      .generatePhoneNumber()
      .subscribe((newPhoneNumResp: any) => {
        const { phoneNum: newPhoneNum } = newPhoneNumResp;
        this.generatedNum = ( newPhoneNum && newPhoneNum ) || '';
      });
  }
}
