import { Component,Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-section-education',
  templateUrl: './section-education.component.html',
  styleUrls: ['./section-education.component.scss']
})
export class SectionEducationComponent implements OnInit {
  @Input() data_: any;

  constructor() { }

  ngOnInit() {
  }

}
