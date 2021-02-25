import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrailerComponent } from 'src/app/searchfilm/trailer/trailer.component';

declare var $: any;

@Component({
  selector: 'app-lichchieu-phimitem',
  templateUrl: './lichchieu-phimitem.component.html',
  styleUrls: ['./lichchieu-phimitem.component.scss'],
})
export class LichchieuPhimitemComponent implements OnInit, AfterViewInit {
  @Input() ItemFilm: any;
  so1: String = '';
  status: boolean = false;
  constructor(public dialog: MatDialog) {}

  openDialog(trailer: any) {
    this.dialog.open(TrailerComponent, {
      data: { trailer: trailer },
    });
  }
  ngOnInit(): void {}

  // đợi dữ liệu load xong thì nó sẻ in ra 1 lần
  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: -15,
      nav: true,
      autoplay: true,
      autoplayTimeout: 10000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  }
}
