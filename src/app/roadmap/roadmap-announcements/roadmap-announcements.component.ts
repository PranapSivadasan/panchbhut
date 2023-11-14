import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { map } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'pb-roadmap-announcements',
  templateUrl: './roadmap-announcements.component.html',
  styleUrls: ['./roadmap-announcements.component.scss']
})
export class RoadmapAnnouncementsComponent implements OnInit {

  public announcements: any[] = [];
  private originalResponse: any;

  constructor(
    private contentfulService: ContentfulService
  ) { }

  ngOnInit(): void {
    this.contentfulService.getContent(environment.entryIDs.announcements).pipe(map(this.announcementPageMapper.bind(this))).subscribe({
      next: (value: any) => {
        this.announcements = value;
      },
      error: (errorMessage) => {
        console.error('Error while fetching data for Roadmap announcements page. Check the error message below for more details.')
        console.error(errorMessage);
      }
    });
  }

  announcementPageMapper(value: any) {
    this.originalResponse = cloneDeep(value);
    let node = new Array();
    for (let field of value.announcements) {
      node.push(field.fields.file.url);
    }
    return node;    
  }

}
