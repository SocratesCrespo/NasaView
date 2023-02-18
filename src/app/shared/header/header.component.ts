import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor( public router: Router ) { }

  public items: MegaMenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home', icon: 'pi pi-home', routerLink: '/'
      },
      {
        label: 'Videos', icon: 'pi pi-play', routerLink: '/videos-gallery'
      },
      {
        label: 'Images', icon: 'pi pi-images', routerLink: '/images-gallery'
      },
      {
        label: 'Perseverance', icon: 'pi pi-fw pi-circle', 
        command: () => window.open('https://mars.nasa.gov/mars2020/')
      },
      {
        label: 'Apod Image', icon: 'pi pi-fw pi-image', routerLink: '/'
      }
      
  ]

  }

}
