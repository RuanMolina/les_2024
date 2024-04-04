import { Pipe, PipeTransform } from '@angular/core';
import { Telefone } from '../interface/telefone';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(value: Telefone, ...args: unknown[]): unknown {
    const inicio = value.numero.substring(0,(value.numero.length/2));
    const fim = value.numero.substring((value.numero.length/2),value.numero.length);
    return inicio + '-'+ fim;
  }

}
