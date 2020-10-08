import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.scss']
})
export class ContentMainComponent implements OnInit {

 loai: string="lichChieu"

  constructor() { }

  ngOnInit(): void {
  }

  selection(val){
    this.loai=val
  }

}
