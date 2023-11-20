import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { map } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';
import { environment } from 'src/environments/environment.prodpd';

@Component({
  selector: 'pb-gallery-videos',
  templateUrl: './gallery-videos.component.html',
  styleUrls: ['./gallery-videos.component.scss']
})
export class GalleryVideosComponent implements OnInit {
  public title: string = "";
  public videos: any[] = [];
  private originalResponse: any;

  constructor(
    private contentfulService: ContentfulService
  ) { }

  ngOnInit(): void {
    this.contentfulService.getContent(environment.entryIDs.charactersInAction).pipe(map(this.galleryVideosMapper.bind(this))).subscribe({
      next: (value: any) => {
        this.videos = value.videos;
        this.title = value.pageTitle;
      },
      error: (errorMessage) => {
        console.error('Error while fetching data for Gallery Videos page. Check the error message below for more details.')
        console.error(errorMessage);
      }
    });

  }

  galleryVideosMapper(value: any): any {
    this.originalResponse = cloneDeep(value);
    value = {};
    let videoArray = new Array();
    value['pageTitle'] = this.originalResponse.pageTitle;
    for (let video of this.originalResponse.videos) {
      let videoNode: any = {};
      videoNode['videoUrl'] = video.fields.file.url;
      videoArray.push(videoNode);
    }
    value['videos'] = videoArray;
    return value;
  }

}
