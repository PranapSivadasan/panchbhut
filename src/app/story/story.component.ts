import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { environment } from 'src/environments/environment.dev';
import { map } from 'rxjs';
import { cloneDeep } from 'lodash';
import { MdToHtmlPipe } from '../pipes/md-to-html.pipe';

@Component({
  selector: 'pb-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  private originalResponse: any;
  public storyPageContent: any;

  constructor(
    private contentfulService: ContentfulService,
    private mdToHTML: MdToHtmlPipe
  ) { }

  ngOnInit(): void {
    this.contentfulService.getContent(environment.entryIDs.story).pipe(map(this.storyPageMapper.bind(this))).subscribe({
      next: (value) => {
        this.storyPageContent = value;
      },
      error: (errorMessage) => {
        console.error('Error while fetching data for story page. Check the error message below for more details.')
        console.error(errorMessage);
      }
    });
  }

  storyPageMapper(value: any): any {
    this.originalResponse = cloneDeep(value);
    value.storyContent = this.mdToHTML.transform(value.storyContent);
    return value;
  }

}
