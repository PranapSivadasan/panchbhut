import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-gallery-videos',
  templateUrl: './gallery-videos.component.html',
  styleUrls: ['./gallery-videos.component.scss']
})
export class GalleryVideosComponent implements OnInit {

  a = [0,1,2,3];

  constructor() { }

  ngOnInit(): void {
  }

}
