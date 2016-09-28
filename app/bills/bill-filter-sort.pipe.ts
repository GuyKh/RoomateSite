import {  PipeTransform, Pipe } from '@angular/core';
import {IBill} from './bill';

@Pipe({
    name: 'billSortFilter'
})
export class BillSortFilterPipe implements PipeTransform {

    // Sort bills descending
    transform(value: IBill[], args: string): IBill[] {

        if (!value) {
            return null;
        }

         value.sort((a: IBill, b: IBill) => {
             if (a.date > b.date) {
                return -1;
             } else if (a.date < b.date) {
                 return 1;
             } else {
                 return 0;
         }
        });
        return value;

    }
}
