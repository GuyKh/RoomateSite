import { Component, OnInit }  from '@angular/core';



import { IBill } from './bill'
import { BillService } from './bill.service';

@Component({
    templateUrl: 'app/bills/bill-list.component.html',
    styleUrls: ['app/bills/bill-list.component.css']

})
export class BillListComponent implements OnInit {
    pageTitle: string = 'Bills';
    listTitleFilter: string = '';
    fromListFilter: string = '';
    toListFilter: string = '';
    filterString: string = '';
    errorMessage: string;
    bills: IBill[];

    constructor(private _billService: BillService){
        
    }

    ngOnInit(): void {
       this._billService.getBills()
            .subscribe(
                bills => this.bills = bills,
                error => this.errorMessage = <any>error);
    }


}