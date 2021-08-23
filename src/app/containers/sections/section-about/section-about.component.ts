import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.scss']
})
export class SectionAboutComponent implements OnInit {

  @Input() data_: any;

  constructor() { }

  ngOnInit() {
  }

}
