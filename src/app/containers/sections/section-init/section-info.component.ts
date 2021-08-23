import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-info',
  templateUrl: './section-info.component.html',
  styleUrls: ['./section-info.component.scss']
})
export class SectionInfoComponent implements OnInit {

  @Input() data_: any;

  constructor(private elementRef: ElementRef) { };

  ngOnInit(): void { }


  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../../../assets/custom/js/typed_.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
