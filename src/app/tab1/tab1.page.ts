import { Component, ViewChild } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Virtual } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

SwiperCore.use([Pagination, Navigation, Virtual]);
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  slides: any;
  @ViewChild("swiperRef", { static: false }) swiperRef?: SwiperComponent;


  constructor() {
    this.slides = Array.from({ length: 7000 }).map((_, index) => {
      var temp = { name: `Slide ${index + 1}`, price: 5 * index + 1 };
      return temp;
    });
    console.log(this.slides);

  }

}
