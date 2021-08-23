import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-section-services',
  templateUrl: './section-services.component.html',
  styleUrls: ['./section-services.component.scss']
})
export class SectionServicesComponent implements OnInit {

  imagesPath = environment.imagesPath;
  @Input() data_: any;

  constructor() { }

  ngOnInit() {
  }

}
