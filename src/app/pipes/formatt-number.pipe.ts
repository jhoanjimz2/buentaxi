
import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency, getCurrencySymbol } from '@angular/common';

@Pipe({
  name: 'formattNumber'
})
export class FormattNumberPipe implements PipeTransform {

  transform(
    value: number,
    currencyCode: string = 'COP',
    display:
      | 'code'
      | 'symbol'
      | 'symbol-narrow'
      | string
      | boolean = 'symbol',
    digitsInfo: string = '.0-0',
    locale: string = 'es',
  ): string | null {
    return formatCurrency(
      value,
      locale,
      '',
      currencyCode,
      digitsInfo,
    );
  }


}
