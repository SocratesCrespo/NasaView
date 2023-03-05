import { Component, HostListener, OnInit } from '@angular/core';
import { apodImage } from 'src/app/interfaces/apod.interface';
import { MediaResponse, Item } from 'src/app/interfaces/media.interface';
import { ContentService } from 'src/app/services/content.service';



@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  mediaResult: MediaResponse;
  homeVideoUrl: string = 'http://images-assets.nasa.gov/video/Our Planet Our Home An Earth Day Perspective_S/Our Planet Our Home An Earth Day Perspective_S~orig.mp4';
  video = document.getElementById('home-video');
  mobile: boolean = false;

  /* Modal Window */
  displayBasic: boolean;

  
  constructor( private ContentService: ContentService ) {  }
  
  
  ngOnInit(): void {
    if (window.screen.width <= 768) { 
      this.mobile = true;
    }
  }
  
  showBasicDialog(video: HTMLMediaElement) {
    this.displayBasic = true;
    video.pause();
  }

  hideBasicDialog(video: HTMLMediaElement){
    this.displayBasic = false;
    if( window.pageYOffset == 0 && video.paused ){
      video.play();
    }
  }
 
 playVideo(video: HTMLMediaElement){

  if ( window.pageYOffset == 0 && video.paused ){
    video.play();
  }else{
    video.pause();
  }
   
 }


   /* resultImg(){
    this.ContentService.media('Our Planet Our Home An Earth Day Perspective_S')
    .subscribe( 
      (mediaResp) => {
      this.mediaResult = mediaResp;
      this.itemsResult = mediaResp.collection.items;
    }
    );
  } */

 

}
