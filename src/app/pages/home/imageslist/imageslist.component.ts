import { Component, OnInit } from '@angular/core';
import { Item, MediaResponse } from 'src/app/interfaces/media.interface';
import { ContentService } from 'src/app/services/content.service';




@Component({
  selector: 'app-imageslist',
  templateUrl: './imageslist.component.html',
  styleUrls: ['./imageslist.component.css']
})
export class ImageslistComponent implements OnInit {

  cars: MediaResponse;
  carsItems?: Item[];

  constructor( private ContentService: ContentService ) {
   
  }

ngOnInit() {
    this.imgList();
}

imgList(){
  
  
  this.ContentService.mediaSearch('satellite')
  .subscribe( 
    (mediaResp) => {
    this.cars = mediaResp;
    this.carsItems = mediaResp.collection.items.slice(0,12);
      console.log(this.carsItems);
  });
}




}
