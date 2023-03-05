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
  mobile: boolean = false;
  responsiveOptions;

  constructor( private ContentService: ContentService ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
  ];
  }

ngOnInit() {
    this.imgList();

    if (window.screen.width <= 768) { 
      this.mobile = true;
    }
}

imgList(){
  
  
  this.ContentService.mediaSearch('satellite')
  .subscribe( 
    (mediaResp) => {
    this.cars = mediaResp;
    this.carsItems = mediaResp.collection.items.slice(0,12);
  });
}




}
