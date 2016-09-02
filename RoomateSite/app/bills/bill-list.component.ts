import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { IBill } from './bill'
import { BillFilterPipe } from './bill-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { BillService } from './bill.service';

@Component({
    templateUrl: 'app/bills/bill-list.component.html',
    styleUrls: ['app/bills/bill-list.component.css'],
    pipes: [BillFilterPipe],
    directives: [StarComponent, ROUTER_DIRECTIVES]
})
export class BillListComponent implements OnInit {
    pageTitle: string = 'bills';
    listFilter: string;
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