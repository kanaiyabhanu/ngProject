import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(val: any[], arg: any) {
    if (arg) {
      return val.filter((data) =>
        data.product.toLowerCase().includes(arg.toLowerCase())
      );
    } else return val;
  }
}
