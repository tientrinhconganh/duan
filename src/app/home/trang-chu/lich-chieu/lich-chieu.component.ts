import { Component, OnInit } from '@angular/core';
// import {Movies} from 'src/app/core/models/movies';
// import {MoviesService} from 'src/app/core/services/movies.service'


@Component({
  selector: 'app-lich-chieu',
  templateUrl: './lich-chieu.component.html',
  styleUrls: ['./lich-chieu.component.scss']
})
export class LichChieuComponent implements OnInit {

  dangChieuStatus: boolean = true;
  constructor() { }
  HienPhimDangChieu(){
    this.dangChieuStatus = true;
  }
  HienPhimSapChieu(){
    this.dangChieuStatus = false;
  }
  ngOnInit(): void {
  }

 
}
