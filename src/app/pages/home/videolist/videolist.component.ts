import { Component, OnInit } from '@angular/core';
import { VideoList } from 'src/app/interfaces/videolist.interface';


@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideolistComponent implements OnInit {

  videos: VideoList[] = [
    {
      id: 1,
      url: 'https://images-assets.nasa.gov/video/GSFC_20180417_Worldview_m12928_Tutorial/GSFC_20180417_Worldview_m12928_Tutorial~orig.mp4',
      name: 'How to View and Share Your Planet with Worldview'
    },
    {
      id: 2,
      url: 'https://images-assets.nasa.gov/video/jsc2017m001088_Top-17-Earth-Images-of-2017-MP4/jsc2017m001088_Top-17-Earth-Images-of-2017-MP4~orig.mp4',
      name: 'Canada Aurora Borealis'
    },
    {
      id: 3,
      url: 'https://images-assets.nasa.gov/video/ARC-20180108-AAV3073-UPWT-360Shareable/ARC-20180108-AAV3073-UPWT-360Shareable~orig.mp4',
      name: 'Wind Tunnel Test of NASA’s Most Powerful Rocket (360° Animation)'
    },
    {
      id: 4,
      url: 'https://images-assets.nasa.gov/video/SSC_2018-10-11 - RS-25 Engine Test-Engineers Footage/SSC_2018-10-11 - RS-25 Engine Test-Engineers Footage~orig.mp4',
      name: 'NASA Continues Fall Series of RS-25 Engine Tests'
    },
    {
      id: 5,
      url: 'https://images-assets.nasa.gov/video/226_SpactacularConjunction/226_SpactacularConjunction~orig.mp4',
      name: 'ScienceCast 226: A Spectacular Conjunction of Venus and Jupiter'
    },
    {
      id: 6,
      url: 'https://images-assets.nasa.gov/video/JPL-20210401-WHATSUf-0001-Whats_Up_April_2021/JPL-20210401-WHATSUf-0001-Whats_Up_April_2021~orig.mp4',
      name: "What's Up: April 2021 Skywatching Tips from NASA"
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
