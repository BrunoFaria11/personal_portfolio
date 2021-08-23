import { GitService } from '../git.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { GitRepoModel } from '../../models/gitRepoModel';

@Injectable({ providedIn: 'root' })
export class GitStoreService {
  constructor(private GitService: GitService) { }

  _gitRepo = new BehaviorSubject<any>([]);
  gitRepo$ = this._gitRepo.asObservable();

  get GitRepos(): GitRepoModel[] {
    return this._gitRepo.getValue();
  }

  set GitRepos(val: GitRepoModel[]) {
    this._gitRepo.next(val);
  }

  fetchAll() {
    this.GitService.Fetch().then((data) => {
      this.GitRepos = data.repos;
    });
  }

}
