import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { environment } from 'src/environments/environment.dev';
import { map } from 'rxjs';
import { cloneDeep } from 'lodash';
import { MdToHtmlPipe } from '../pipes/md-to-html.pipe';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'pb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private originalResponse: any;
  public homePageContent: any;

  constructor(
    private contentfulService: ContentfulService,
    private mdToHtml: MdToHtmlPipe,
    protected utility: UtilityService
  ) {
  }

  ngOnInit(): void {
    this.contentfulService.getContent(environment.entryIDs.home).pipe(map(this.homepageMapper.bind(this))).subscribe({
      next: (value) => {
        this.homePageContent = value;
      },
      error: (errorMessage) => {
        console.error('Error while fetching data for home page. Check the error message below for more details.')
        console.error(errorMessage);
      }
    });
  }

  homepageMapper(value: any): any {
    this.originalResponse = cloneDeep(value);
    value.introVideo = value.introVideo.fields.file.url;
    value.textLogo = value.textLogo.fields.file.url;
    value.description = this.mdToHtml.transform(value.description);
    return value;
  }

}
