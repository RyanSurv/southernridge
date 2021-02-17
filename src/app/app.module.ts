import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LandingHeroComponent } from './pages/landing/landing-hero/landing-hero.component';
import { LandingFeaturesComponent } from './pages/landing/landing-features/landing-features.component';
import { LandingVideoComponent } from './pages/landing/landing-video/landing-video.component';
import { LandingWelcomeComponent } from './pages/landing/landing-welcome/landing-welcome.component';
import { LandingRoomsComponent } from './pages/landing/landing-rooms/landing-rooms.component';
import { LandingPricingComponent } from './pages/landing/landing-pricing/landing-pricing.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RulesComponent } from './pages/rules/rules.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    LandingHeroComponent,
    LandingFeaturesComponent,
    LandingVideoComponent,
    LandingWelcomeComponent,
    LandingRoomsComponent,
    LandingPricingComponent,
    FooterComponent,
    RulesComponent,
    GalleryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
