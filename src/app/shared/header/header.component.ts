import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

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
        label: 'Perseverance', icon: 'pi pi-fw pi-circle', routerLink: '/'
      },
      {
        label: 'Apod Image', icon: 'pi pi-fw pi-image', routerLink: '/'
      }
      
  ]

  }

}
