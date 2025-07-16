import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortener'
})
export class ShortenerPipe implements PipeTransform {

  transform(value: string, lenght: number): string {
    return value.length >= lenght ? (value.substring(0,lenght) + "..."): value;
  }
}
