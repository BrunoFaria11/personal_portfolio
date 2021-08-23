import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.scss']
})
export class InfoListComponent implements OnInit {

  @Input() props : any;

  objectKeys = Object.keys;
  objectValues = Object.values;


  constructor() { }

  ngOnInit() {
  }

}
