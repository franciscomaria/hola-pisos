import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separatorImagesPdf'
})
export class SeparatorImagesPdfPipe implements PipeTransform {

  transform(elements: string[] | undefined, args: string): string[] | undefined{
    let filter: string[] | undefined = [];

    if (!args || args === 'images') {
      filter = elements?.filter(image => image.includes('.jpg'));
    } else if (args === 'pdf') {
      filter = elements?.filter(image => image.includes('.pdf'));
    }

    return filter;
  }

}
