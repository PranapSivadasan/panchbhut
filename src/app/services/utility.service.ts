import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  openUrlInNewWindow(url: string): void {
    window.open(url, "_blank");
  }
}
