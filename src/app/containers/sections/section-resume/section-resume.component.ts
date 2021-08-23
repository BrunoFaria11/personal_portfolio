import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-resume',
  templateUrl: './section-resume.component.html',
  styleUrls: ['./section-resume.component.scss']
})
export class SectionResumeComponent implements OnInit {

  @Input() data_: any;

  constructor() { }

  ngOnInit() {
  }

}
