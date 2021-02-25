import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  users: any;
  constructor(private user: AuthService) {}
  ngOnInit(): void {
    this.user.userCurrent.asObservable().subscribe({
      next: (result) => {
        this.users = result;
        console.log(this.users);
      },
    });
  }
}
