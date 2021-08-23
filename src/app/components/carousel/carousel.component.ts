import { Component, Input, OnInit } from '@angular/core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() props: any;

  icons = {
    faChevronRight_: faChevronRight,
    faChevronLeft_: faChevronLeft,
  }


  owlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      490: {
        items: 2
      },
      767: {
        items: 2
      },
      1024: {
        items: 2
      }
    },
    nav: false
  }
  constructor() { }

  ngOnInit() {
  }
}
