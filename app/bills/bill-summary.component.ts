import { Component, Input, OnInit } from '@angular/core';
import { IBill, BillCategory } from './bill';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'bill-summary',
    templateUrl: 'app/bills/bill-summary.component.html'
})
export class BillSummaryComponent{
    //@Input() inputBills: Observable<IBill[]>;
    @Input() bills: IBill[] = [];
    billsByCategory : Array<number> = [];
    errorMessage: string;

    
    //   ngOnInit() : void {
    //       this.inputBills.subscribe(
    //           bills => {
    //               this.bills = bills;
    //               this.calculateBillsByCategory();
    //             },
    //           error => this.errorMessage = <any>error
    //       );
    //     }


    calculateBillsByCategory() : Array<{ amount : number, label: string}>{
        this.billsByCategory = [];
        if (!this.bills)
            return;

        let monthDelta : number = this.getMonthDelta();

        for (let bill of this.bills){

            if (!this.billsByCategory[bill.category])
                this.billsByCategory[bill.category] = bill.amount;
            else 
                this.billsByCategory[bill.category] += bill.amount;
        }

        let billsAverageByCategory : Array<{ amount : number, label: string}> = [];
        billsAverageByCategory = [];
        for(let categoryTotalId in this.billsByCategory){
            billsAverageByCategory.push({amount: this.billsByCategory[categoryTotalId] / monthDelta, label: this.getCategory(categoryTotalId)});
        }

        return billsAverageByCategory;

    }

    getCategory(categoryId : number) : string{
        return BillCategory[categoryId];
    }


    calculateAppartmentAverage() : number{
        if (!this.bills || this.bills.length === 0)
            return 0;
        
        let totalPayInBills : number = 0;
        for (let bill of this.bills){
            totalPayInBills += bill.amount;
        }

        let monthDelta : number = 0;
        monthDelta = this.getMonthDelta();

        return totalPayInBills/monthDelta;
    }


    getMonthDelta() : number{
        let monthDelta = 0;

        if (!this.bills)
            return 0;
        
        let firstBill : IBill = this.bills[this.bills.length-1];
        let lastBill : IBill = this.bills[0];

        let yearDelta : number = lastBill.date.getFullYear() - firstBill.date.getFullYear();
        
        
        if (yearDelta == 0){
            monthDelta = lastBill.date.getMonth() - firstBill.date.getMonth() + 1;
        } else{
            monthDelta += lastBill.date.getMonth();
            monthDelta += 13 - firstBill.date.getMonth();
            monthDelta += 12 * yearDelta;
        }

        
        return monthDelta;
    }

    calculateTennantAverage() : number{
        if (!this.bills || this.bills.length === 0)
            return 0;
        let differentPayers : Array<number> = [];

        for (let bill of this.bills){
            if (!differentPayers[bill.payerId])
                differentPayers[bill.payerId] = 1;
        }

        this.calculateBillsByCategory();
        

        if (differentPayers.length == 0)
            return 0;
        return this.calculateAppartmentAverage()/differentPayers.length;
    }
}