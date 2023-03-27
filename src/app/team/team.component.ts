import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team: Array<any>;
  advisors: Array<any>;

  constructor(
    private https: HttpClient
  ) {
    this.team = [];
    this.advisors = [];
  }

  ngOnInit(): void {
    this.https.get('assets/data/team.json').subscribe(
      (data: any) => {
        this.team = data;
      }
    );

    this.https.get('assets/data/advisors.json').subscribe(
      (data: any) => {
        this.advisors = data;
      }
    );
  }

  openSocials(link: string) {
    window.open(link, "_blank");
  }

}
