/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SectionGitReposComponent } from './section-git-repos.component';

describe('SectionGitReposComponent', () => {
  let component: SectionGitReposComponent;
  let fixture: ComponentFixture<SectionGitReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionGitReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionGitReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
