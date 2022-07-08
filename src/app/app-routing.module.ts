import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ImagesGalleryComponent } from './pages/images-gallery/images-gallery.component';
import { SingleImageComponent } from './pages/single-image/single-image.component';
import { VideoGalleryComponent } from './pages/video-gallery/video-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: 'image/:id',
    component: SingleImageComponent
  },
  {
    path: 'images-gallery',
    component: ImagesGalleryComponent
  },
  {
    path: 'videos-gallery',
    component: VideoGalleryComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
