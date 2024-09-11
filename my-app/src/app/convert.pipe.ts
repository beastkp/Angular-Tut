import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, 
    // ...args: unknown[],
    targetUnits:string
  ): unknown {
    // the second component that is provided and stuff them into a single array called args
    if(!value){
      return ''
    }
    // console.log("PIPE ARGS",args);
    switch(targetUnits){
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934 * 1000;
      default:
        throw new Error('Target Unit not supported');
    }

    // console.log("This is a custom pipe",value)
    return value* 1.60934;
  }

}
