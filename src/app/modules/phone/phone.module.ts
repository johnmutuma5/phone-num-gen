import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { GeneratePhoneNumComponent } from './components/generate-phone-num/generate-phone-num.component';
import { ListNumsComponent } from './components/list-nums/list-nums.component';

const routes: Routes = [
  {
    path: 'v1/phone/generate',
    component: GeneratePhoneNumComponent, 
  },
  {
    path: 'v1/phone/list',
    component: ListNumsComponent, 
  }
];

@NgModule({
  declarations: [
    GeneratePhoneNumComponent,
    ListNumsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: []
})
export class PhoneModule { }
