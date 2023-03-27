import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-gallery-videos',
  templateUrl: './gallery-videos.component.html',
  styleUrls: ['./gallery-videos.component.scss']
})
export class GalleryVideosComponent implements OnInit {

  videos: any[] = [];

  constructor(
    private https: HttpClient
  ) { }

  ngOnInit(): void {
    this.https.get('assets/data/gallery-videos.json').subscribe(
      (data: any) => {
        this.videos = data;
      }
    );
  }

}
