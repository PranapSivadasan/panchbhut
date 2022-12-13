import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';
import { TeamComponent } from './team/team.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LandingComponent,
    HomeComponent,
    StoryComponent,
    TeamComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
