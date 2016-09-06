import { Component, OnInit, ViewChild }  from '@angular/core';
import {AddBillComponent} from './bill-add.component';



import { IBill } from './bill'
import { BillService } from './bill.service';

@Component({
    templateUrl: 'app/bills/bill-list.component.html',
    styleUrls: ['app/bills/bill-list.component.css'],
    directives: [AddBillComponent]

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

    @ViewChild(AddBillComponent) addBillComponent: AddBillComponent;

    addBill(billId: number):void {
        this.addBillComponent.init(billId);
        //this.addUserComponent.show();
    }

    ngOnInit(): void {
       this._billService.getBills()
            .subscribe(
                bills => this.bills = bills,
                error => this.errorMessage = <any>error);
    }

 


}