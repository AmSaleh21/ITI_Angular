import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../../_models/product";

@Pipe({
  name: 'productFilterPipe',
  pure: false
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], ...args: string[]): Product[] {
    let result:Product[]=[];
    for (let index in value){
      if( ( (value[index].code.toLowerCase() ) ).includes(((args[0]).toLowerCase())) ){
        result.push(value[index]);
      }
    }
    return result;
  }

}
