import {PipeTransform, Pipe} from 'angular2/core';
import {IBill} from './bill';

@Pipe({
    name: 'billFilter'
})
export class BillFilterPipe implements PipeTransform{

    transform(value: IBill[], args: string[]): IBill[]{
        let filter = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((bill:IBill) =>
            bill.billTitle.toLocaleLowerCase().indexOf(filter) != -1) : value; 
    }
}