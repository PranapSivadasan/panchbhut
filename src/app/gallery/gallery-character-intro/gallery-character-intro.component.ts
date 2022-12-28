import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-gallery-character-intro',
  templateUrl: './gallery-character-intro.component.html',
  styleUrls: ['./gallery-character-intro.component.scss']
})
export class GalleryCharacterIntroComponent implements OnInit {

  characters: any[] = [
    {
      name: 'Character Name',
      title: 'Character Desc'
    },
    {
      name: 'Character Name',
      title: 'Character Desc'
    },
    {
      name: 'Character Name',
      title: 'Character Desc'
    },
    {
      name: 'Character Name',
      title: 'Character Desc'
    },
    {
      name: 'Character Name',
      title: 'Character Desc'
    },
    {
      name: 'Character Name',
      title: 'Character Desc'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
