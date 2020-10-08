import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LichChieuComponent } from './lich-chieu/lich-chieu.component';
import { ThongTinComponent } from './thong-tin/thong-tin.component';
import { DanhGiaComponent } from './danh-gia/danh-gia.component';
import {ContentMainComponent} from './content-main.component'
import {MaterialModule} from 'src/app/core/material/material.module'
import { SharingModule } from './../../../core/sharing/sharing.module';



@NgModule({
  declarations: [LichChieuComponent, ThongTinComponent, DanhGiaComponent,ContentMainComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharingModule
  ],
  exports:[
    ContentMainComponent
  ]
})
export class ContentMainModule { }
