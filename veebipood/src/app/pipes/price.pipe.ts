import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number): string {
    return value < 1000 ? value + "€" : value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "€";
  }

}
