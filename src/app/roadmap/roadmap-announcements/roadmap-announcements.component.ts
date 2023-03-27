import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-roadmap-announcements',
  templateUrl: './roadmap-announcements.component.html',
  styleUrls: ['./roadmap-announcements.component.scss']
})
export class RoadmapAnnouncementsComponent implements OnInit {

  announcements: any[] = [];

  constructor(
    private https: HttpClient
  ) { }

  ngOnInit(): void {
    this.https.get('assets/data/announcements.json').subscribe(
      (data: any) => {
        this.announcements = data;
      }
    );
  }

}
