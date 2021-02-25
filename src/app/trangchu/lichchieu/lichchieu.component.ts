import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lichchieu',
  templateUrl: './lichchieu.component.html',
  styleUrls: ['./lichchieu.component.scss'],
})
export class LichchieuComponent implements OnInit {
  status: boolean = true;

  constructor() {}

  dangChieu() {
    this.status = true;
  }
  sapChieu() {
    this.status = false;
  }

  ngOnInit(): void {}
}
