import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userCurrent = new BehaviorSubject(null);
  constructor(private _http: HttpClient) {
    const user = localStorage.getItem('user');
    if (user) {
      this.userCurrent.next(JSON.parse(user));
    }
  }

  lognIn(value: any): Observable<any> {
    const url =
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';
    return this._http.post(url, value);
  }
}
