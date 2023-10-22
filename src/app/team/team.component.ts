import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { environment } from 'src/environments/environment.dev';
import { map } from 'rxjs';
import { UtilityService } from '../services/utility.service';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'pb-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  private originalResponse: any;
  public teamPageContent: any;

  constructor(
    private contentfulService: ContentfulService,
    public utility: UtilityService
  ) { }

  ngOnInit(): void {
    this.contentfulService.getContent(environment.entryIDs.team).pipe(map(this.teamPageMapper.bind(this))).subscribe({
      next: (value: any) => {
        this.teamPageContent = value;
      },
      error: (errorMessage) => {
        console.error('Error while fetching data for team page. Check the error message below for more details.')
        console.error(errorMessage);
      }
    });
  }

  teamPageMapper(value: any): any {
    this.originalResponse = cloneDeep(value);
    let memberArray = new Array();
    for (let i = 0; i < this.originalResponse.memberImages.length; i++) {
      let member = this.originalResponse.memberImages[i];
      let memberContent: any = {};
      memberContent['name'] = member.fields.description;
      memberContent['title'] = member.fields.title;
      memberContent['image'] = member.fields.file.url;
      memberContent['twitter'] = this.originalResponse.xTwitterLinks[i] ? this.originalResponse.xTwitterLinks[i].trim() : null;
      memberContent['instagram'] = this.originalResponse.instagramLinks[i] ? this.originalResponse.instagramLinks[i].trim() : null;
      memberArray.push(memberContent);
    }
    return memberArray;
  }

}
