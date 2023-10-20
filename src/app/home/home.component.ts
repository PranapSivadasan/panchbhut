import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { environment } from 'src/environments/environment.dev';
import { map } from 'rxjs';
import * as _ from 'lodash';
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
      }
    });
  }

  homepageMapper(value: any): any {
    this.originalResponse = _.cloneDeep(value);
    value.introVideo = value.introVideo.fields.file.url;
    value.textLogo = value.textLogo.fields.file.url;
    value.description = this.mdToHtml.transform(value.description);
    return value;
  }

}
