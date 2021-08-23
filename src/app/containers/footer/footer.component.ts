import { Component,Input, OnInit } from '@angular/core';
import  *  as  data from "../../../environments/siteconfig.json";
import { faGithub, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  data_ = data.pt;

  icons = {
    faGit: faGithub,
    faInstagram: faInstagram,
    faLinkedin: faLinkedinIn,
  }

  constructor() { }

  ngOnInit() {
  }

}
