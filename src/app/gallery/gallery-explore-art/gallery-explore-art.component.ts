import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-gallery-explore-art',
  templateUrl: './gallery-explore-art.component.html',
  styleUrls: ['./gallery-explore-art.component.scss']
})
export class GalleryExploreArtComponent implements OnInit {

  a = [0,1,2,3];

  constructor() { }

  ngOnInit(): void {
  }

}
