import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';
 import { Movies } from 'src/app/core/models/movies';
import { OwlOptions } from 'ngx-owl-carousel-o';

import $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-dang-chieu',
  templateUrl: './dang-chieu.component.html',
  styleUrls: ['./dang-chieu.component.scss'],
})
export class DangChieuComponent implements OnInit, AfterViewInit {
  DanhSachPhimDangChieu1: Movies[];
  loading: boolean = false;
  error: boolean = false;

  DanhSachPhimDangChieu = [
    {
      TenPhim: 'The Walking Dead',
      HinhAnh:
        '../../../assets/img/sinh-nhat-chet-choc-happy-death-day-c16-15089876590397.jpg',
    },
    { TenPhim: 'Ferdinand', HinhAnh: '../../../assets/img/ferdinand.jpg' },
    {
      TenPhim: 'Ngắm Pháo Hoa',
      HinhAnh:
        '../../../assets/img/phao-hoa-nen-ngam-tu-duoi-hay-ben-canh-15088436147700.jpg',
    },
    {
      TenPhim: 'Nhóc Ma Siêu Quậy',
      HinhAnh:
        '../../../assets/img/nhoc-ma-sieu-quay-the-little-vampire-3d-15090331183157.jpg',
    },
    {
      TenPhim: 'Trải nghiệm điểm chết',
      HinhAnh:
        '../../../assets/img/trai-nghiem-diem-chet-flatliners-15093522963475.jpg',
    },
  ];

  constructor(private movieService: MoviesService) {}

  // Tương đương componentDidMount bên React
  ngOnInit(): void {
    this.loading = true;
    this.movieService.layDanhSachPhim().subscribe({
      next: (result) => {
        this.DanhSachPhimDangChieu1 = result;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.error = true;
        this.loading = false;
      }
    });
    this.movieService.movieList.subscribe({
      next: (result) => {
        this.DanhSachPhimDangChieu1 = result;
      }
    })
  }
  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });
  }

  // customOptions: OwlOptions = {
  // autoWidth: true,
  // loop: true,
  // items: '10',
  // margin: 10,
  // slideBy: 'page',
  // merge: true,
  // autoplay: true,
  // autoplayTimeout: 3000,
  // autoplayHoverPause: true,
  // autoplaySpeed: 2000,
  // dotsSpeed: 500,
  // autoplayMouseleaveTimeout: 5000,
  // dots: false,
  // dotsData: true,
  // mouseDrag: false,
  // touchDrag: false,
  // pullDrag: false,
  // smartSpeed: 400,
  // fluidSpeed: 499,
  // dragEndSpeed: 350,
  // dotsEach: 4,
  // center: true,
  // rewind: true,
  // rtl: true,
  // startPosition: 1,
  // navText: [ '<i class=fa-chevron-left>left</i>', '<i class=fa-chevron-right>right</i>' ],
  //     responsive: {
  //       0: {
  //         items: 1
  //       },
  //       600: {
  //         items: 2
  //       },
  //       900: {
  //         items: 3
  //       }
  //     },
  //     // stagePadding: 40,
  //     nav: true
  //   }
}
