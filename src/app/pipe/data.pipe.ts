import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {

    const dia =value.getDate().toString();
     const mes = (value.getMonth()+1).toString();
     const ano = value.getFullYear().toString();
    return dia +'/'+ mes + '/' +ano;
  }

}
