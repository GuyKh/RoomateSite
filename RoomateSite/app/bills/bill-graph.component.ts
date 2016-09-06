
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import {CHART_DIRECTIVES} from 'node_modules/ng2-charts/bundles/ng2-charts';



import { Subscription } from 'rxjs/Subscription';

import { BillService } from './bill.service';
import { UserService } from '../users/user.service';
import { IBill } from './bill';

@Component({
    templateUrl: 'app/bills/bill-graph.component.html',
    directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class BillGraphComponent {
    bills: IBill[];
    errorMessage: string;
    private sub: any;
    userName: string;
    billsByMonth: { [yearMonth: string]: number; } = {};
    billsByUser: { [userId: number]: number; } = {};


    public monthLineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
    ];
    public monthLineChartLabels: Array<any> = [];
    public monthLineChartOptions: any = {
        animation: false,
        responsive: true
    };
    public monthLineChartColours: Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public monthLineChartLegend: boolean = true;
    public monthLineChartType: string = 'line';


    constructor(private _billService: BillService, private _userService: UserService) {
    }   

 


    getUser(id: number) {
        this._userService.getUser(id).subscribe(
            user => this.userName = user.userName,
            error => this.errorMessage = <any>error);
    }

    getBills() {
        this._billService.getBills()
            .subscribe(
                bills => this.bills = bills,
                error => this.errorMessage = <any>error);

            this.groupBillsByMonth(this.bills);
            this.groupBillsByPayer(this.bills);
    }

    groupBillsByMonth(bills: IBill[]) {
        if (!bills)
            return;

        for (let bill of bills) {

            if (!bill)
                continue;

            let billDate = new Date(bill.date);
            let monthYearString: string = billDate.getFullYear() + '-' + billDate.getMonth();


            let totalMonth: number = 0;
            if (this.billsByMonth[monthYearString]) {
                totalMonth = this.billsByMonth[monthYearString];
            }

            totalMonth += bill.amount;
            this.billsByMonth[monthYearString] = totalMonth;
        }


        let data: number[] = [];
        let months: string[] = [];
        for (let key in this.billsByMonth) {
            let value : number = this.billsByMonth[key];

            data.push(value);
            months.push(key);
        }

        this.monthLineChartData = [];
        this.monthLineChartData.push({ data: data, label: 'Monthly Expense' });

        this.monthLineChartLabels = months;
    }

    groupBillsByPayer(bills: IBill[]) {
        if (!bills)
            return;

        for (let bill of bills) {

            if (!bill)
                continue;

            let billpayer: number = bill.payerId;


            let totalForUser: number = 0;
            if (this.billsByUser[billpayer]) {
                totalForUser = this.billsByUser[billpayer];
            }

            totalForUser += bill.amount;
            this.billsByUser[billpayer] = totalForUser;
        }
    }
}
