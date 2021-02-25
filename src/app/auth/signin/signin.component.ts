import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  hide = true;
  constructor(private auth: AuthService, private route: Router) {}
  dangNhap(value: any) {
    this.auth.lognIn(value).subscribe({
      next: (result) => {
        console.log(result);
        this.auth.userCurrent.next(result);
        localStorage.setItem('user', JSON.stringify(result));
        this.route.navigate(['/']);
      },
      error: (err) => {
        console.log(err.error);
      },
    });
  }
  ngOnInit(): void {}
}
