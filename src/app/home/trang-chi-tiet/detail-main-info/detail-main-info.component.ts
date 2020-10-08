import { Component, OnInit } from '@angular/core';
import {MoviesService} from 'src/app/core/services/movies.service';
import {Movies} from 'src/app/core/models/movies'
@Component({
  selector: 'app-detail-main-info',
  templateUrl: './detail-main-info.component.html',
  styleUrls: ['./detail-main-info.component.scss']
})
export class DetailMainInfoComponent implements OnInit {

  constructor(private movieService:MoviesService) { }

  loading: boolean = false;
  error: boolean = false;
  chiTietPhim: any;

  ngOnInit(): void {

    this.loading = true;

    this.movieService.layChiTietPhim("1344").subscribe({
      next: (result) => {
        // this.danhSachPhim = result;
        this.chiTietPhim = result;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.error = true;
        this.loading = false;
      },
    });
  }
}
