import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(values: any[], searchTerm: string): any[] {
    if (!values || !searchTerm) {
      return values;
    }

    // Filtrer les éléments qui contiennent la chaîne fournie
    return values.filter(value =>
      JSON.stringify(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
