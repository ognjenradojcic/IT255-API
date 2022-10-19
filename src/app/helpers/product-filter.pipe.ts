import { Pipe, PipeTransform } from '@angular/core';
import { isAnyArrayBuffer } from 'util/types';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item.title.toLowerCase().includes(searchText);
    })
  }
}
