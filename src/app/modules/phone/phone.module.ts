import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { GeneratePhoneNumComponent } from './components/generate-phone-num/generate-phone-num.component';

const routes: Routes = [
  {
    path: 'v1/phone/generate',
    component: GeneratePhoneNumComponent, 
  }
];

@NgModule({
  declarations: [
    GeneratePhoneNumComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: []
})
export class PhoneModule { }
