import { Component,Input, OnInit } from '@angular/core';
import { GitStoreService } from '../../../core/services/stores/git-store.service';

@Component({
  selector: 'app-section-git-repos',
  templateUrl: './section-git-repos.component.html',
  styleUrls: ['./section-git-repos.component.scss']
})
export class SectionGitReposComponent implements OnInit {

  @Input() data_: any;

  constructor(public GitStoreService: GitStoreService) { }

  ngOnInit() {
    this.GitStoreService.fetchAll();
  }

}
