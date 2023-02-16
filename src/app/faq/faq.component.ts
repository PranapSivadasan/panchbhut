import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pb-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqs: Array<FAQ>;

  constructor(
    private https: HttpClient
  ) {
    this.faqs = [];
  }

  ngOnInit(): void {
    this.https.get('assets/data/faq.json').subscribe(
      (data: any) => {
        this.faqs = data;
      }
    );
  }

}

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}
