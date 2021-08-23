import { Component, Input, OnInit } from '@angular/core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { GitRepoModel } from '../../core/models/gitRepoModel';

@Component({
  selector: 'app-carousel-git-repo',
  templateUrl: './carousel-git-repo.component.html',
  styleUrls: ['./carousel-git-repo.component.scss']
})
export class CarouselGitRepoComponent implements OnInit {

  @Input() props!: GitRepoModel[] ;

  icons = {
    faChevronRight_: faChevronRight,
    faChevronLeft_: faChevronLeft,
  }

  currentSlide!: SlidesOutputData;

  carouseldData(data: SlidesOutputData) {
    this.currentSlide = data;
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
