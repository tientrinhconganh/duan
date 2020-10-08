import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {MoviesService} from 'src/app/core/services/movies.service'
import { Movies } from 'src/app/core/models/movies';



@Component({
  selector: 'app-thong-tin',
  templateUrl: './thong-tin.component.html',
  styleUrls: ['./thong-tin.component.scss']
})
export class ThongTinComponent implements OnInit {

  public trailerInDetailPage: string ='';

  // filmDetail: any;
  // subFilmDetail = new Subscription;
  // fullStarArr: any = [];
  // emptyStarArr: any = [];

  loading: boolean = false;
  error: boolean = false;
  chiTietPhim: any;

  constructor(private movies:MoviesService) { }

  ngOnInit(): void {
    // this.getTimeFromFilmDetailOfBannerInDetailPage()

    this.loading = true;

    this.movies.layChiTietPhim("1314").subscribe({
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

    // this.movies.movieList.subscribe({
    //   next: (result) => {
    //     this.danhSachPhim = result;
    //   },
    // });
  }

  // getTimeFromFilmDetailOfBannerInDetailPage() {
  //   this.subFilmDetail = this.sharing.sharingFilmDetailFromBannerInDetailComponent.subscribe((data: any) => {
  //     if (data != null && data != '') {
  //       this.filmDetail = data;
  //       this.trailerInDetailPage = this.filmDetail.Trailer.replace('watch?v=', 'embed/');
  //     }
  //     for (let star = 0; star < this.filmDetail.DanhGia; star++) {
  //       this.fullStarArr.push("+1 star");
  //     }
  //     for (let star = 0; star < (5 - this.filmDetail.DanhGia); star++) {
  //       this.emptyStarArr.push("-1 star");
  //     }
  //   });
  // }

  // ngOnDestroy() {
  //   this.subFilmDetail.unsubscribe();
  // }
  

}
