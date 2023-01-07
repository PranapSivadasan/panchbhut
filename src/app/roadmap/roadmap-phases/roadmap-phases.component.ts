import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-roadmap-phases',
  templateUrl: './roadmap-phases.component.html',
  styleUrls: ['./roadmap-phases.component.scss']
})
export class RoadmapPhasesComponent implements OnInit {

  phases = [0,1,2,3,4];

  constructor() { }

  ngOnInit(): void {
  }

}
