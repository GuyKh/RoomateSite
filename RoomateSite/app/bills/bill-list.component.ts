import { Component, OnInit, ViewChild }  from '@angular/core';
import {AddBillComponent} from './bill-add.component';
import { BillChartComponent } from './bill-chart.component';


import { IUser } from '../users/user';
import { UserService } from '../users/user.service'
import { IBill, BillCategory } from './bill'
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
    users: IUser[];
    dirty:boolean = true;

    constructor(private _billService: BillService, private _userService : UserService){
        
    }

    @ViewChild(AddBillComponent) addBillComponent: AddBillComponent;
    @ViewChild(BillChartComponent) billChartComponent: BillChartComponent;

    addBill(billId: number):void {
        this.addBillComponent.init(billId);
        //this.addUserComponent.show();
    }

    ngOnInit(): void {
       this._billService.getBills()
            .subscribe(
                bills => this.bills = bills,
                error => this.errorMessage = <any>error);

                
       this._userService.getUsers()
            .subscribe(
                users => this.users = users,
                error => this.errorMessage = <any>error);
    }

    getUsernameById(userId : number) : string{
        if (!this.users)
            return "";
        for (let i = 0 ; i < this.users.length; i++){
            if (this.users[i].userId == userId)
                return this.users[i].userName;
        }

        return "";
    }

    showCategory(category : number) : string{
        
        if (!category)
            return "";
        
        return BillCategory[category];
    }

    initGraph(bills : IBill[]) : void{
        
        if (this.billChartComponent.isVisible){
            this.billChartComponent.hide();
            return;
        }
        
        if (this.dirty){
            this.billChartComponent.initialize(bills);
            
        }
        this.dirty = false;
        this.billChartComponent.show();
    }


 


}