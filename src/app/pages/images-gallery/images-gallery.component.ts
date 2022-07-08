import { Component, OnInit } from '@angular/core';
import {  Item } from 'src/app/interfaces/media.interface';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.css']
})
export class ImagesGalleryComponent implements OnInit {
  inputValue: string = '';
  images: Item[];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
  }

  showTerm(term: string){
    this.contentService.mediaSearch( term )
      .subscribe( (images) => {
        console.log(images);
        let response = images.collection.items.filter(item => item.data[0].media_type == 'image' );
        this.images = response;
      } );
      
      
  }

}
