import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-code-skills',
  templateUrl: './section-code-skills.component.html',
  styleUrls: ['./section-code-skills.component.scss']
})
export class SectionCodeSkillsComponent implements OnInit {

  @Input() data_: any;
  constructor() { }

  ngOnInit() {
  }

}
