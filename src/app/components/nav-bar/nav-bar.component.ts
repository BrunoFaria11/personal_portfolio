import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { LanguageStoreService } from '../../core/services/stores/language-store.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  icons = {
    faChevronDown_: faChevronDown,
  }
  value: string = "Pt"
  constructor(private route: ActivatedRoute, public languageStoreService: LanguageStoreService) { }

  ngOnInit() {
  }

  changeLanguage(language: string) {
    this.value = language.charAt(0).toUpperCase() + language.slice(1);
    this.languageStoreService.change(language);
  }
  scrollToElement(id: any): void {
    const element = document.querySelector(id)
    const yOffset = -80;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }
}
