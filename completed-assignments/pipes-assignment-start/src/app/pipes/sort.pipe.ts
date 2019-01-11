import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, key: any): any {
    return value.sort((a, b) => a[key].localeCompare(b[key]));
  }

}
