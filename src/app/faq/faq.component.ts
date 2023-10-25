import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { cloneDeep } from 'lodash';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.dev';

@Component({
  selector: 'pb-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  public faqs: Array<FAQ>;
  private originalResponse: any;
  private readonly embeddedBlock: string = "embedded-entry-block";

  constructor(
    private contentfulService: ContentfulService
  ) {
    this.faqs = new Array();
  }

  ngOnInit(): void {
    this.contentfulService.getContent(environment.entryIDs.faq).pipe(map(this.faqPageMapper.bind(this))).subscribe({
      next: (value: any) => {
        this.faqs = value;
      }
    });

    this.contentfulService.logAllEntryIds();

  }

  faqPageMapper(value: any): any {
    let localFaqList = value.faqList.content;
    let returnList = new Array<FAQ>();
    this.originalResponse = cloneDeep(value);
    for (let i = 0; i < localFaqList.length; i++) {
      let faqNode = localFaqList[i];
      if (this.embeddedBlock === faqNode.nodeType) {
        let faq: FAQ = {
          question: faqNode.data.target.fields.question,
          answer: faqNode.data.target.fields.answer,
          isOpen: i == 0
        }
        returnList.push(faq);
      }
    }
    return returnList;
  }

}

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}
