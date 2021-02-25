import { formatDate } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movies';
import { MoviesService } from 'src/app/core/services/movies.service';
//import $ from 'jquery'

@Component({
  selector: 'app-lichchieu-phimdangchieu',
  templateUrl: './lichchieu-phimdangchieu.component.html',
  styleUrls: ['./lichchieu-phimdangchieu.component.scss'],
})
export class LichchieuPhimdangchieuComponent implements OnInit {
  today = new Date();
  jstoday: String = '';
  constructor(private movieList: MoviesService) {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy ', 'en-US');
  }
  danhSachPhim: Movie[] = [];

  ngOnInit(): void {
    this.movieList.getMovieList().subscribe({
      // next: Nhận kết quả
      next: (result) => {
        this.danhSachPhim = result;
      },
      // error: Nhận lỗi
      error: (error) => {
        console.log(error);
      },
      // complete: Chạy sau khi thành công
      complete: () => {
        console.log('DONE');
      },
    });
  }
}
