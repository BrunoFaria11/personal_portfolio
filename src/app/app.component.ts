import { Component } from '@angular/core';
import { LanguageStoreService } from './core/services/stores/language-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';


  constructor(private languageStoreService: LanguageStoreService) { }

  ngOnInit() {
    this.languageStoreService.change("pt");
  }
}
