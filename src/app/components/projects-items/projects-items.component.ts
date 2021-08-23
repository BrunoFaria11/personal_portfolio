import { Component,Input, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects-items',
  templateUrl: './projects-items.component.html',
  styleUrls: ['./projects-items.component.scss']
})
export class ProjectsItemsComponent implements OnInit {
  @Input() props: any ;

  
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
      767: {
        items: 1
      },
      1024: {
        items: 1
      }
    },
    nav: false
  }
  constructor() { }

  ngOnInit() {
  }

}
