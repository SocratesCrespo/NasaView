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
  emptyResult: boolean = false;
  termNoFound: string = '';

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
  }

  showTerm(term: string){
    this.contentService.mediaSearch( term )
      .subscribe( (images) => {
        let response = images.collection.items.filter(item => item.data[0].media_type == 'image' );
        this.images = response;
        if(response.length == 0){
          this.emptyResult = true;
          this.termNoFound = term;
        } else {
          this.emptyResult = false;
        }
      });
      
  }

}
