import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team: Array<any>;
  advisors: Array<any>;

  constructor() {
    this.team = [
      {
        name: 'Elon Musk',
        title: 'Founder'
      },
      {
        name: 'Elon Musk',
        title: 'Founder'
      },
      {
        name: 'Elon Musk',
        title: 'Founder'
      }
    ];

    this.advisors = [
      {
        name: 'Elon Musk',
        title: 'Founder'
      },
      {
        name: 'Elon Musk',
        title: 'Founder'
      },
      {
        name: 'Elon Musk',
        title: 'Founder'
      }
    ];

  }

  ngOnInit(): void {
  }

}
