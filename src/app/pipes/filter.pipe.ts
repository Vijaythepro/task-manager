import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search: string): any {
    if (!value || !search) {
      return value;
    } else {
      //if the value or search value is there then this filtering will fire

      return value.filter((value:any) =>
        value.toLowerCase().includes(search.toLowerCase())
      );
    }
  }

}
