import { Component, Input, OnInit } from '@angular/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.scss']
})
export class CircleProgressComponent implements OnInit {

  @Input() props: any;

  mode: ProgressSpinnerMode = 'determinate';

  constructor() { }

  ngOnInit() {
  }

}
