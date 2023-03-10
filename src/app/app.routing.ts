import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GalleryComponent } from "./gallery/gallery.component";
import { LandingComponent } from "./landing/landing.component";
import { RoadmapComponent } from "./roadmap/roadmap.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path: 'landing',
        component: LandingComponent,
        pathMatch: 'full'
    },
    {
        path: 'gallery',
        component: GalleryComponent,
        pathMatch: 'full'
    },
    {
        path: 'roadmap',
        component: RoadmapComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'top' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }