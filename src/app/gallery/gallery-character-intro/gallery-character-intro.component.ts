import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-gallery-character-intro',
  templateUrl: './gallery-character-intro.component.html',
  styleUrls: ['./gallery-character-intro.component.scss']
})
export class GalleryCharacterIntroComponent implements OnInit {

  characters: any[] = [];

  constructor(
    private https: HttpClient
  ) { }

  ngOnInit(): void {
    this.https.get('assets/data/character-intro.json').subscribe(
      (data: any) => {
        this.characters = data;
      }
    );
  }

}
