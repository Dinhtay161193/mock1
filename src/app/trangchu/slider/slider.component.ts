import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  listSlide = [
    { images: '../../../assets/panner1.jpg' },
    { images: '../../../assets/panner2.jpg' },
    { images: '../../../assets/panner3.jpg' },
    { images: '../../../assets/panner4.jpg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
