import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LeftImageComponent } from './components/left-image/left-image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './containers/home/home.component';
import { NameInfoComponent } from './components/name-info/name-info.component';
import { ContentComponent } from './containers/content/content.component';
import { SectionInfoComponent } from './containers/sections/section-init/section-info.component';
import { FooterComponent } from './containers/footer/footer.component';
import { ButtonRoundedComponent } from './components/button-rounded/button-rounded.component';
import { SectionAboutComponent } from './containers/sections/section-about/section-about.component';
import { TextContentComponent } from './components/text-content/text-content.component';
import { InfoListComponent } from './components/info-list/info-list.component';
import { TitleComponent } from './components/title/title.component';
import { SectionServicesComponent } from './containers/sections/section-services/section-services.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { SectionResumeComponent } from './containers/sections/section-resume/section-resume.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SectionEducationComponent } from './containers/sections/section-education/section-education.component';
import { CircleProgressComponent } from './components/circle-progress/circle-progress.component';
import { SectionCodeSkillsComponent } from './containers/sections/section-code-skills/section-code-skills.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SectionGitReposComponent } from './containers/sections/section-git-repos/section-git-repos.component';
import { GitService } from './core/services/git.service';
import { HttpClientModule } from '@angular/common/http';
import { CarouselGitRepoComponent } from 'src/app/components/carousel-git-repo/carousel-git-repo.component';
import { ProjectsItemsComponent } from 'src/app/components/projects-items/projects-items.component';
import { SectionProjectsComponent } from './containers/sections/section-projects/section-projects.component';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { GraphQLModule } from './graphql.module';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LeftImageComponent,
    HomeComponent,
    NameInfoComponent,
    ContentComponent,
    SectionInfoComponent,
    SectionAboutComponent,
    SectionServicesComponent,
    SectionResumeComponent,
    SectionEducationComponent,
    SectionCodeSkillsComponent,
    SectionGitReposComponent,
    CircleProgressComponent,
    TextContentComponent,
    InfoListComponent,
    FooterComponent,
    ButtonRoundedComponent,
    TitleComponent,
    CarouselComponent,
    CarouselGitRepoComponent,
    ProjectsItemsComponent,
    SectionProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FontAwesomeModule,
    CarouselModule,
    GraphQLModule
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
