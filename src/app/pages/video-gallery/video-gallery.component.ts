import { Component, OnInit } from '@angular/core';
import {  Item } from 'src/app/interfaces/media.interface';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-video-gallery',
  templateUrl: './video-gallery.component.html',
  styleUrls: ['./video-gallery.component.css']
})
export class VideoGalleryComponent implements OnInit {

  inputValue: string = '';
  videos: Item[];
  mediaUrl: string = 'https://images-assets.nasa.gov';
  showing: string = 'd-none';
  
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
  }

  showTerm(term: string){

    this.contentService.mediaSearch( term )
      .subscribe( (videos) => {
        console.log(videos);
        let response = videos.collection.items.filter(item => item.data[0].media_type == 'video' );
        this.videos = response;

        if( response.length === 0 ){
          this.showing = 'd-block';
        }else{
          this.showing = 'd-none';
        }
      } );
      
      
  }

}
