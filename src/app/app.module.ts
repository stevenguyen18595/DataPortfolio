import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataPortfolioAboutMeComponent } from './data-portfolio-about-me/data-portfolio-about-me.component';
import { DataPortfolioEducationComponent } from './data-portfolio-education/data-portfolio-education.component';
import { DataPortfolioExperienceComponent } from './data-portfolio-experience/data-portfolio-experience.component';
import { DataPortfolioMyClientComponent } from './data-portfolio-my-client/data-portfolio-my-client.component';
import { DataPortfolioSkillsComponent } from './data-portfolio-skills/data-portfolio-skills.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DataPortfolioAboutMeComponent,
    DataPortfolioEducationComponent,
    DataPortfolioExperienceComponent,
    DataPortfolioMyClientComponent,
    DataPortfolioSkillsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
