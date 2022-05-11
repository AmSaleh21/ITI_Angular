import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(value: string[], ...args: string[]): string[] {
    let result:string[]=[];
    for ( let index in value) {
        if ((value[index].toLowerCase()).includes((args[0].toLowerCase()))){
          result.push(value[index]);
        }
    }
    return result;
  }
}
