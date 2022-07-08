import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {

  public videoSrc: string = 'https://images-assets.nasa.gov/video/JPL-20211227-M2020f-0001-Perseverance_Year_in_Review/JPL-20211227-M2020f-0001-Perseverance_Year_in_Review~orig.mp4';

  constructor() { }

  ngOnInit(): void {
  }

}
