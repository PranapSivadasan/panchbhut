import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { map } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'pb-gallery-explore-art',
  templateUrl: './gallery-explore-art.component.html',
  styleUrls: ['./gallery-explore-art.component.scss']
})
export class GalleryExploreArtComponent implements OnInit {

  public artCharacters: any[] = [];
  private originalResponse: any;

  constructor(
    private contentfulService: ContentfulService
  ) { }

  ngOnInit(): void {
    this.contentfulService.getContent(environment.entryIDs.exploreArt).pipe(map(this.exploreArtMapper.bind(this))).subscribe({
      next: (value: any) => {
        this.artCharacters = value;
      },
      error: (errorMessage) => {
        console.error('Error while fetching data for Explore the art page. Check the error message below for more details.')
        console.error(errorMessage);
      }
    });
  }

  exploreArtMapper(value: any): any {
    this.originalResponse = cloneDeep(value);
    let returnValue = new Array();
    for (let node of this.originalResponse.art) {
      let exporeArrayNode: any = {};
      exporeArrayNode['title'] = node.fields.title;
      exporeArrayNode['description'] = node.fields.description;
      exporeArrayNode['image'] = node.fields.file.url;
      returnValue.push(exporeArrayNode);
    }
    return returnValue;
  }

}
