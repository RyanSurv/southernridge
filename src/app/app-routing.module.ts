import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { LandingComponent } from './pages/landing/landing.component';
import { RulesComponent } from './pages/rules/rules.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'gallery', component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
