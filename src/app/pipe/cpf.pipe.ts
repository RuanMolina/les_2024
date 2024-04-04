import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
   const prim = value.slice(0,3);
   const seg = value.slice(3,6);
   const terc = value.slice(6,9);
   const quart = value.slice(9,11);
    return prim + '.' + seg + '.' + terc + '-' +quart;
  }

}
