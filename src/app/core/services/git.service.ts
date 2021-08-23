import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitRepoModel } from '../models/gitRepoModel';
import { Apollo, } from "apollo-angular";
import gql from "graphql-tag";

@Injectable()
export class GitService {

  convertToRepo(obj: any) {
    return new GitRepoModel(obj.id, obj.name, obj.url, obj.description, obj.createdAt, obj.openGraphImageUrl);
  }

  getRepos() {
    return this.apollo.watchQuery({
      query: gql`
      {
        viewer {
          repositories(first: 50) {
            edges {
              repository:node {
                id
                url
                createdAt
                name
                description
                openGraphImageUrl
              }
            }
          }
        }
      }
    `,
    });
  }

  Fetch(): Promise<any> {
    return new Promise((resolve, reject) => {
      let arrayRepos: any[] = [];
      this.getRepos().valueChanges.subscribe((result: any) => {
        for (const item of result.data.viewer.repositories.edges as any) {
          arrayRepos.push(this.convertToRepo(item.repository));
        };
        resolve({ repos: arrayRepos });
      });

    })

  }

  constructor(private httpClient: HttpClient, private apollo: Apollo) { }

  ngOnInit(): void { }
}
