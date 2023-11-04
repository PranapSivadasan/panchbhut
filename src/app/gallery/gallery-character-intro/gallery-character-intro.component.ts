import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { map } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'pb-gallery-character-intro',
  templateUrl: './gallery-character-intro.component.html',
  styleUrls: ['./gallery-character-intro.component.scss']
})
export class GalleryCharacterIntroComponent implements OnInit {

  public characters: any[] = [];
  public title: string = "";
  private originalResponse: any;

  constructor(
    private contentfulService: ContentfulService
  ) { }

  ngOnInit(): void {
    this.contentfulService.getContent(environment.entryIDs.clanIntro).pipe(map(this.clanIntroMapper.bind(this))).subscribe({
      next: (value: any) => {
        this.title = value.pageTitle;
        this.characters = value.clanList;
      },
      error: (errorMessage) => {
        console.error('Error while fetching data for Gallery Clan intro page. Check the error message below for more details.')
        console.error(errorMessage);
      }
    });
  }

  clanIntroMapper(value: any): any {
    this.originalResponse = cloneDeep(value);
    let returnValue: any = {};
    let clanList = new Array();
    returnValue['pageTitle'] = value.pageTitle;
    for (let clan of this.originalResponse.clanList) {
      let clanNode: any = {};
      clanNode['title'] = clan.fields.title; 
      clanNode['description'] = clan.fields.description; 
      clanNode['image'] = clan.fields.file.url; 
      clanList.push(clanNode);
    }
    returnValue['clanList'] = clanList;
    return returnValue;
  }

}
