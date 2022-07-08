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
        label: 'Mars', icon: 'pi pi-fw pi-calendar', routerLink: '/'
      },
      {
        label: 'Settings', icon: 'pi pi-fw pi-cog',
          items: [
              [
                  {
                      label: 'Setting 1',
                      items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                  },
                  {
                      label: 'Setting 2',
                      items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                  },
                  {
                      label: 'Setting 3',
                      items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                  }
              ],
              [
                  {
                      label: 'Technology 4',
                      items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                  }
              ]
          ]
      }
  ]

  }

}
