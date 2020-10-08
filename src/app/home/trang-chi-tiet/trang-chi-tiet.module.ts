import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TrangChiTietComponent} from './trang-chi-tiet.component';
import { DetailMainInfoComponent } from './detail-main-info/detail-main-info.component';
import {FooterModule} from '../footer/footer.module'
import {HeaderModule} from '../header/header.module'
import {ContentMainModule} from '../trang-chi-tiet/content-main/content-main.module'

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'chitiet',
    component: TrangChiTietComponent,
    children: [
      { path: 'chitiet', component: TrangChiTietComponent },
    ],
  },
];

@NgModule({
  declarations: [
    TrangChiTietComponent,
    DetailMainInfoComponent, 
],
  imports: [
    CommonModule,
    FooterModule,
    HeaderModule,
    ContentMainModule,
    RouterModule,
    RouterModule.forChild(routes),
  ],

})
export class TrangChiTietModule { }
