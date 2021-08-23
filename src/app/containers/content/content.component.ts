import { Component, OnInit } from '@angular/core';
import { LanguageStoreService } from 'src/app/core/services/stores/language-store.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {


  constructor(public dataJson: LanguageStoreService) {

  }




  ngOnInit(): void {
  }

}
