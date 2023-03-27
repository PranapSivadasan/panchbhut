import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-gallery-explore-art',
  templateUrl: './gallery-explore-art.component.html',
  styleUrls: ['./gallery-explore-art.component.scss']
})
export class GalleryExploreArtComponent implements OnInit {

  artCharacters: any[] = [];

  constructor(
    private https: HttpClient
  ) { }

  ngOnInit(): void {
    this.https.get('assets/data/explore-art-character.json').subscribe(
      (data: any) => {
        this.artCharacters = data;
      }
    );
  }

}
