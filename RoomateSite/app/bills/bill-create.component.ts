
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { BillService } from './bill.service';

import { IBill, Bill } from './bill';


@Component({
    templateUrl: 'app/bills/bill-create.component.html'
})
export class BillCreateComponent // implements OnInit, OnDestroy
{
    private errorMessage: string;
    private bill: IBill;

    constructor(private _billService: BillService) { }

    createBill(title: string, creator: number, amount: number, date: string, additionalInfo: string) {

        this.bill = this._billService.putBill(title, creator, amount, date, additionalInfo);
    }


}