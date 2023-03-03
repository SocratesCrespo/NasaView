import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  mobile: boolean = false;

  constructor( private ActivatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    if (window.screen.width <= 768) { 
      this.mobile = true;
    }
  }

}
