import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../services/contentful.service';
import { environment } from 'src/environments/environment.prod';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'pb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public twitter: string = "";
  public instagram: string = "";
  public discord: string = "";
  public copyrights: string = "";

  constructor(
    private contentfulService: ContentfulService,
    public utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.contentfulService.getContent(environment.entryIDs.socials).subscribe({
      next: (value: any) =>{
        this.twitter = value.twitterLink;
        this.instagram = value.instagramLink;
        this.discord = value.discordLink;
        this.copyrights = value.copyrightInfo;
      },
      error: (errorMessage) => {
        console.error('Error while fetching data for Socials and Copyrights page. Check the error message below for more details.')
        console.error(errorMessage);
      }
    });
  }

}
