import { Component, OnInit }  from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';


import { IBill } from './bill'
import { BillService } from './bill.service';

@Component({
    templateUrl: 'app/bills/bill-list.component.html',
    styleUrls: ['app/bills/bill-list.component.css'],
     directives: [MODAL_DIRECTIVES]

})
export class BillListComponent implements OnInit {
    pageTitle: string = 'bills';
    listFilter: string = '';
    errorMessage: string;
    modal: ModalComponent;
    bills: IBill[];

    constructor(private _billService: BillService){
        
    }

    ngOnInit(): void {
       this._billService.getBills()
            .subscribe(
                bills => this.bills = bills,
                error => this.errorMessage = <any>error);
    }

    open() {
        this.modal.open();
    }

}