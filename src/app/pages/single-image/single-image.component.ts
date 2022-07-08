import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, MediaResponse } from 'src/app/interfaces/media.interface';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-single-image',
  templateUrl: './single-image.component.html',
  styleUrls: ['./single-image.component.css']
})
export class SingleImageComponent implements OnInit {

  public termino: string = '';
  public imageUrl: Item;
  public singleMedia: MediaResponse;
  public singleMediaItem?: Item[] | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contentService: ContentService
    ) { }

  ngOnInit(): void {
    this.getParams();
    this.searchImage();
    this.searchImageInfo();
  }

  getParams(){
    this.activatedRoute.params
      .subscribe( ({ id }) => {
        this.termino = id;
      });
  }

  searchImage(){
    this.contentService.media( this.termino )
      .subscribe( resp => {
        let response = resp.collection.items.find( item => item.href.includes('.jpg') );
        this.imageUrl = response;
      });
  }

  searchImageInfo(){
    this.contentService.mediaSearch( this.termino )
      .subscribe( single => {
        this.singleMedia = single;
        this.singleMediaItem = single.collection.items.slice(0,12);
        console.log(this.singleMediaItem);
      });
  }

}
