import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DataPortfolioAboutMeComponent } from './data-portfolio-about-me/data-portfolio-about-me.component';
import { DataPortfolioEducationComponent } from './data-portfolio-education/data-portfolio-education.component';
import { DataPortfolioExperienceComponent } from './data-portfolio-experience/data-portfolio-experience.component';
import { DataPortfolioMyClientComponent } from './data-portfolio-my-client/data-portfolio-my-client.component';
import { DataPortfolioSkillsComponent } from './data-portfolio-skills/data-portfolio-skills.component';

const routes: Routes = [
  {
    path: 'about-me',
    component: DataPortfolioAboutMeComponent,
  },
  {
    path: 'education',
    component: DataPortfolioEducationComponent,
  },
  {
    path: 'experience',
    component: DataPortfolioExperienceComponent,
  },
  {
    path: 'skills',
    component: DataPortfolioSkillsComponent,
  },
  {
    path: 'my-client',
    component: DataPortfolioMyClientComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
