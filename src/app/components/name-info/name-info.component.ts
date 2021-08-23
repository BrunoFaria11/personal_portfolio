import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-info',
  templateUrl: './name-info.component.html',
  styleUrls: ['./name-info.component.scss']
})
export class NameInfoComponent implements OnInit {

  @Input() props: any;
  constructor() { }

  ngOnInit(): void {
  }

}
