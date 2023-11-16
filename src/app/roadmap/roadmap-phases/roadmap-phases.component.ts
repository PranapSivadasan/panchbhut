import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { map } from 'rxjs';
import { MdToHtmlPipe } from 'src/app/pipes/md-to-html.pipe';
import { ContentfulService } from 'src/app/services/contentful.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'pb-roadmap-phases',
  templateUrl: './roadmap-phases.component.html',
  styleUrls: ['./roadmap-phases.component.scss']
})
export class RoadmapPhasesComponent implements OnInit {

  private originalResponse: any;
  private readonly embeddedBlock: string = "embedded-entry-block";

  public roadmapImage: string = "";
  public pageLoaded: boolean;
  public phases: Array<Phases> = new Array();

  constructor(
    private contentfulService: ContentfulService,
    private mdToHtmlPipe: MdToHtmlPipe
  ) {
    this.pageLoaded = false;
  }

  ngOnInit(): void {
    this.contentfulService.getContent(environment.entryIDs.phases).pipe(map(this.phasePageMapper.bind(this))).subscribe({
      next: (value: any) => {
        this.roadmapImage = value.roadmapImage;
        this.pageLoaded = true;
        this.phases = value.phases;
      },
      error: (errorMessage) => {
        console.error('Error while fetching data for Roadmap Phases page. Check the error message below for more details.')
        console.error(errorMessage);
      }
    });
  }

  phasePageMapper(value: any): any {
    this.originalResponse = cloneDeep(value);
    let returnValue: any = {};
    let phasesArray: Array<Phases> = new Array();
    returnValue['roadmapImage'] = value.roadmapImage.fields.file.url;
    for (let node of value.allPhases.content) {
      if ( this.embeddedBlock === node.nodeType) {
        let data = node.data.target.fields;
        let phaseNode: Phases = {};
        phaseNode.phaseNumber = data.phaseNumber;
        phaseNode.content = this.getPhaseContentFromData(data);
        phasesArray.push(phaseNode)
      }
    }
    returnValue['phases'] = phasesArray;
    return returnValue;
  }

  getPhaseContentFromData(value: any): Array<PhaseContent> {
    let phaseContentArray: Array<PhaseContent> = new Array();
    let content1: PhaseContent, content2: PhaseContent, content3:PhaseContent, content4: PhaseContent;
    content1 = {
      salesPercentage: value.section1SalesPercentage,
      activities: this.mdToHtmlPipe.transform(value.section1Activities),
      isEnabled: value.section1Enable
    }
    content2 = {
      salesPercentage: value.section2SalesPercentage,
      activities: this.mdToHtmlPipe.transform(value.section2Activities),
      isEnabled: value.section2Enable
    }
    content3 = {
      salesPercentage: value.section3SalesPercentage,
      activities: this.mdToHtmlPipe.transform(value.section3Activities),
      isEnabled: value.section3Enable
    }
    content4 = {
      salesPercentage: value.section4SalesPercentage,
      activities: this.mdToHtmlPipe.transform(value.section4Activities),
      isEnabled: value.section4Enable
    }
    phaseContentArray.push(content1);
    phaseContentArray.push(content2);
    phaseContentArray.push(content3);
    phaseContentArray.push(content4);
    return phaseContentArray;
  }

  replaceAllSpaces(value: string, charToReplace: string): string {
    return value.replace(" ", charToReplace);
  }

}

interface Phases {
  phaseNumber?: string;
  content?: Array<PhaseContent>;
}

interface PhaseContent {
  salesPercentage: string;
  activities: string;
  isEnabled: boolean;
}
