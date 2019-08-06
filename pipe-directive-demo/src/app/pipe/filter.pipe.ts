import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, key: string, phrase: string): any {
    return value.filter(item => {
      return item[key].toLowerCase().indexOf(phrase.toLowerCase()) > -1;
    });
  }
}

//ha az item[key] és a phrase elé még megadjuk a .toString() metódust, akkor mindent előbb
//át is alakít stringgé, így számok esetén is működik