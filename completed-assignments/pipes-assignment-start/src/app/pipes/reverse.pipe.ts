import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let retStr = '';
    for (let i = value.length - 1; i >= 0; i--) {
      retStr += value.charAt(i);
    }
    return retStr;
  }
}
