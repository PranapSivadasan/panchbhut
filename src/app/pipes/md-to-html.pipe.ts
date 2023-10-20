import { Pipe, PipeTransform } from '@angular/core';
const marked = require('marked');

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  transform(value: string): string {
    return marked.parse(value)
  }

}
