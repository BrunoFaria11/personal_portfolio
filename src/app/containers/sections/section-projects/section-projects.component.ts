import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-section-projects',
  templateUrl: './section-projects.component.html',
  styleUrls: ['./section-projects.component.scss']
})
export class SectionProjectsComponent implements OnInit {

  @Input() data_: any;

  constructor() { }

  ngOnInit() {
  }

}
