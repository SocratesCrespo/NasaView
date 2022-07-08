import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { BannerComponent } from './home/banner/banner.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { ImageslistComponent } from './home/imageslist/imageslist.component';
import { SingleImageComponent } from './single-image/single-image.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { FormsModule } from '@angular/forms';
import { ImagesGalleryComponent } from './images-gallery/images-gallery.component';
import { InputTextModule } from 'primeng/inputtext';
import { MarsComponent } from './home/mars/mars.component';
import { VideolistComponent } from './home/videolist/videolist.component';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';





@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    ErrorPageComponent,
    ImageslistComponent,
    SingleImageComponent,
    MarsComponent,
    VideolistComponent,
    ImagesGalleryComponent,
    VideoGalleryComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule
  ]
})
export class PagesModule { }
