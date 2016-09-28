import {  PipeTransform, Pipe } from '@angular/core';
import {IBill} from './bill';

@Pipe({
    name: 'billDateFilter'
})
export class BillDateFilterPipe implements PipeTransform {

    transform(value: IBill[], from: string, to: string): IBill[] {
        from = from ? from.toLocaleLowerCase() : null;
        to = to ? to.toLocaleLowerCase() : null;

        if (!from && !to) {
            return value;   // null
        }

        let fromDate: Date;
        if (!from) {
            fromDate = new Date(-8640000000000000);
        } else {
            fromDate = new Date(from);
        }

        let toDate: Date;
        if (!to) {
            toDate = new Date(8640000000000000);
        } else {
            toDate = new Date(from);
        }

        return value.filter((bill: IBill) =>
            bill.date >= fromDate && bill.date <= toDate);
    }
}
