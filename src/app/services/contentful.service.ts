import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import * as contentful from 'contentful'
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  client: contentful.ContentfulClientApi<any>;

  constructor() {
    this.client = contentful.createClient({
      space: environment.contentfulSpaceDetails.spaceId,
      accessToken: environment.contentfulSpaceDetails.token
    })
  }

  logContent(entryId: string): void {
    this.client.getEntry(entryId).then(
      (value: any) => console.log(value)
    );
  }

  getContent(entryId: string): Observable<any> {
    const promise = this.client.getEntry(entryId);
    return from(promise).pipe(map(this.mapperFunction));
  }

  private mapperFunction(value: any): any {
    let newValue: any = null;
    newValue = value['fields'];
    return newValue;
  }


}
