import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../phone.service';

@Component({
  selector: 'app-list-nums',
  templateUrl: './list-nums.component.html',
  styleUrls: ['./list-nums.component.scss']
})
export class ListNumsComponent implements OnInit {
  phoneNumbers: Array<string>;
  numsToRender: Array<string>;

  constructor(private phoneService: PhoneService) { }

  ngOnInit() {
    this.fetchPhoneNumbers();
  }

  fetchPhoneNumbers (): void {
    this.phoneService.getPhoneNumbers().subscribe((phoneNumbers: string[]) => {
      this.phoneNumbers = phoneNumbers;
      this.numsToRender = this.phoneNumbers;
    }); 
  }

  onGetMaxPhoneNumber (): void {
    const maxPhoneNum = this.phoneNumbers.reduce((acc, curr) => {
      if(acc > curr) { return acc; }
      return curr;
    })
    this.numsToRender = [maxPhoneNum];
  }

  onGetMinPhoneNumber (): void {
    const minPhoneNum = this.phoneNumbers.reduce((acc, curr) => {
      if(acc > curr) { return curr; }
      return acc;
    })
    this.numsToRender = [minPhoneNum];
  }

  onResetFilters (): void {
    this.numsToRender = this.phoneNumbers;
  }

  onSortAscending (): void {
    this.numsToRender = this.numsToRender.sort();
  }

  onSortDescending (): void {
    this.numsToRender = this.numsToRender.sort().reverse();
  }
}
