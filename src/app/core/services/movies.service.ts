import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _http: HttpClient) {}

  //HttpClient trả về phản hồi yêu cầu

  getMovieList(): Observable<Movie[]> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim';
    let params = new HttpParams();
    params = params.append('maNhom', 'GP01');

    return this._http.get<Movie[]>(url, { params });
  }
}
