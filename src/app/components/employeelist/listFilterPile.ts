import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'listFilter'})
export class ListFilterPile implements PipeTransform {

    transform(list: any[], filterText: string): any {
        return list ? list.filter(item => item.employeeName.search(new RegExp(filterText, 'i')) > -1) : [];
    }
}