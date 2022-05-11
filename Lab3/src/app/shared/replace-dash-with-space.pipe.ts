import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'replaceDashWithSpace'
})
export class ReplaceDashWithSpacePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/(-)/gi, ' ');
  }

}
