import {  PipeTransform, Pipe } from '@angular/core';
import {IBill} from './bill';

@Pipe({
    name: 'billTitleFilter'
})
export class BillTitleFilterPipe implements PipeTransform{

    transform(value: IBill[], filter: string): IBill[]{
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((bill:IBill) =>
            bill.billTitle.toLocaleLowerCase().indexOf(filter) != -1) : value; 
    }
}