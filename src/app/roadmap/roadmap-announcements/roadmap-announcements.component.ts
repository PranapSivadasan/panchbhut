import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-roadmap-announcements',
  templateUrl: './roadmap-announcements.component.html',
  styleUrls: ['./roadmap-announcements.component.scss']
})
export class RoadmapAnnouncementsComponent implements OnInit {

  a = [0,1,2,3];

  constructor() { }

  ngOnInit(): void {
  }

}
