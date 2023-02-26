import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, MediaResponse } from 'src/app/interfaces/media.interface';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-apod-image',
  templateUrl: './apod-image.component.html',
  styleUrls: ['./apod-image.component.css']
})
export class ApodImageComponent implements OnInit {

  public imageUrl: string = '';
  public imgDescription: string = '';
  public imgTitle: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private contentService: ContentService
    ) { }

  ngOnInit(): void {
    this.contentService.imageApod()
      .subscribe( single => {
        this.imageUrl = single['url'];
        this.imgDescription = single['explanation'];
        this.imgTitle = single['title'];
        console.log(single);
      });
  }


  

}
