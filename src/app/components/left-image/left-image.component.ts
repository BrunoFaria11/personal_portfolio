import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-left-image',
  templateUrl: './left-image.component.html',
  styleUrls: ['./left-image.component.scss']
})
export class LeftImageComponent implements OnInit {

  imagesPath = environment.imagesPath;

  constructor( ) { }

  ngOnInit(): void {
  }

}
