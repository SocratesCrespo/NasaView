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

  mobile: boolean = false;
  menuOpen: boolean = false;

  constructor( public router: Router ) { }

  public items: MegaMenuItem[] = [];

  ngOnInit(): void {
   
    if (window.screen.width <= 768) { 
      this.mobile = true;
    }
   
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
        label: 'Apod Image', icon: 'pi pi-fw pi-image', routerLink: '/apod-image'
      }
      
    ]

  }

  showMenu(){
    if( this.menuOpen == false ){
      this.menuOpen = true;
    }else{
      this.menuOpen = false;
    }
  }

}
