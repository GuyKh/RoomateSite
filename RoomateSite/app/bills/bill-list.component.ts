import { Component, OnInit, ViewChild }  from '@angular/core';
import {AddBillComponent} from './bill-add.component';



import { IUser } from '../users/user';
import { UserService } from '../users/user.service'
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
    users: IUser[];

    constructor(private _billService: BillService, private _userService : UserService){
        
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
 


}