import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerToX'
})
export class PowerToXPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    let power = Math.pow(value, args[0]);
    return `${value} to the power of ${args[0]} = ${power}`;
  }

}
