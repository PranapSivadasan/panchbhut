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
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryExploreArtComponent } from './gallery/gallery-explore-art/gallery-explore-art.component';
import { GalleryVideosComponent } from './gallery/gallery-videos/gallery-videos.component';
import { GalleryCharacterIntroComponent } from './gallery/gallery-character-intro/gallery-character-intro.component';
import { FooterComponent } from './footer/footer.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { RoadmapPhasesComponent } from './roadmap/roadmap-phases/roadmap-phases.component';
import { RoadmapAnnouncementsComponent } from './roadmap/roadmap-announcements/roadmap-announcements.component';
import { RoadmapUtilitiesComponent } from './roadmap/roadmap-utilities/roadmap-utilities.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LandingComponent,
    HomeComponent,
    StoryComponent,
    TeamComponent,
    FaqComponent,
    GalleryComponent,
    GalleryExploreArtComponent,
    GalleryVideosComponent,
    GalleryCharacterIntroComponent,
    FooterComponent,
    RoadmapComponent,
    RoadmapPhasesComponent,
    RoadmapAnnouncementsComponent,
    RoadmapUtilitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
