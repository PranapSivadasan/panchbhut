import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { map } from 'rxjs';
import { MdToHtmlPipe } from 'src/app/pipes/md-to-html.pipe';
import { ContentfulService } from 'src/app/services/contentful.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'pb-roadmap-utilities',
  templateUrl: './roadmap-utilities.component.html',
  styleUrls: ['./roadmap-utilities.component.scss']
})
export class RoadmapUtilitiesComponent implements OnInit {

  private originalResponse: any;
  public title: string = "";
  public description: string = "";
  public legend: string = "";

  constructor(
    private contentfulService: ContentfulService,
    private mdToHtmlPipe: MdToHtmlPipe
  ) { }

  ngOnInit(): void {
    this.contentfulService.getContent(environment.entryIDs.utilities).pipe(map(this.roadmapUtilitiesMapper.bind(this))).subscribe({
      next: (value: any) => {
        this.title = value.title;
        this.description = value.description;
        this.legend = value.legend;
      },
      error: (errorMessage) => {
        console.error('Error while fetching data for Roadmap Utilities page. Check the error message below for more details.')
        console.error(errorMessage);
      }
    });
  }

  roadmapUtilitiesMapper(value: any): any {
    this.originalResponse = cloneDeep(value);
    let returnValue: any = {};
    returnValue.title = value.title;
    returnValue.description = this.mdToHtmlPipe.transform(value.description);
    returnValue.legend = this.mdToHtmlPipe.transform(value.note);
    return returnValue;
  }

}
